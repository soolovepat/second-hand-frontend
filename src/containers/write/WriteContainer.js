import { useEffect, useState } from "react";
import { editmyPost, writePost } from "../../api/posts";
import { CATEGORIES } from "../auth/RegisterContainer";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Write from "../../components/write/Write";
import Footer from "../../components/common/Footer";
import AWS from "aws-sdk";

const WriteContainer = ({ editPost, editTitle, editComplete }) => {
  const navigate = useNavigate();
  const userEmail = jwt_decode(localStorage.getItem("google_token")).email;
  const [numberOfImage, setNumberOfImage] = useState(0);
  const [formData, setFormData] = useState({
    username: userEmail,
    title: "",
    content: "",
    price: "",
    category: "",
    location: "",
    isSold: false,
    images: [],
  });
  const [openSelect, setOpenSelect] = useState(false);

  //거래 희망 장소 안됨
  useEffect(() => {
    if (editPost) {
      setFormData(editPost);
    }
  }, [editPost]);

  console.log(editPost);

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECREAT_ACCESS_KEY,
  });

  const myBucket = new AWS.S3({
    params: { Bucket: process.env.REACT_APP_S3_BUCKET },
    region: process.env.REACT_APP_RESION,
  });

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    if (name === "price" && isNaN(value)) {
      toast.error("숫자만 입력해주세요.");
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const onChangeFile = (e) => {
    const files = Array.from(e.target.files);
    const fileExts = files.map((file) => file.name.split(".").pop());
    if (!fileExts.every((ext) => ext === "jpg")) {
      alert("jpg 파일만 업로드해주세요.");
      return;
    }

    if (numberOfImage >= 3) {
      toast.error("3장까지만 업로드 가능합니다.");
      return;
    }
    setFormData({ ...formData, images: files });
    setNumberOfImage(numberOfImage + 1);
  };

  const onToggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const onClickSelect = (idx) => {
    setOpenSelect(!openSelect);
    setFormData({ ...formData, category: CATEGORIES[idx] });
  };

  const handlePost = async (imageUrl) => {
    const updatedFormData = { ...formData, images: imageUrl };
    try {
      if (editPost) {
        console.log("ddd");
        const response = await editmyPost(editPost.postId, formData);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "수정 완료 되었습니다 :)",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/${response.data.postId}/detail`);
        console.log(response);
      } else {
        const response = await writePost(updatedFormData);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "작성 완료 되었습니다 :)",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/${response.data.postId}/detail`);
      }

      setFormData({
        ...formData,
        title: "",
        content: "",
        price: "",
        category: "",
        location: "",
        images: [],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Number(formData.price) > 10000) {
      toast.error("만원 이하의 가격만 입력해주세요.");
      return;
    }

    if (!Object.values(formData).every((item) => item !== "")) {
      toast.error("정보를 모두 입력해주세요.");
      return;
    }

    const uploadPromises = formData.images.map((img, _) => {
      const params = {
        ACL: "public-read",
        Body: img,
        Bucket: process.env.REACT_APP_S3_BUCKET,
        Key: `upload/${img.name}`,
      };

      return new Promise((resolve, reject) => {
        myBucket
          .putObject(params)
          .on("httpUploadProgress", (evt) => {
            // progress 처리...
          })
          .send((err, _) => {
            if (err) {
              console.log(err);
              reject(err);
              return;
            }
            const imageUrl = `https://${process.env.REACT_APP_S3_BUCKET}.s3.${process.env.REACT_APP_RESION}.amazonaws.com/${params.Key}`;
            resolve(imageUrl);
          });
      });
    });

    try {
      // 모든 이미지가 업로드될 때까지 기다림
      const imageUrls = await Promise.all(uploadPromises);
      handlePost(imageUrls);
      console.log(imageUrls);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Write
        formData={formData}
        openSelect={openSelect}
        CATEGORIES={CATEGORIES}
        numberOfImage={numberOfImage}
        editTitle={editTitle}
        editComplete={editComplete}
        onToggleSelect={onToggleSelect}
        onClickSelect={onClickSelect}
        onChangeFile={onChangeFile}
        onChangeForm={onChangeForm}
        onSubmit={onSubmit}
      />
      <Footer />
    </>
  );
};

export default WriteContainer;
