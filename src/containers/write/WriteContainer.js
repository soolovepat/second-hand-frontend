import { useEffect, useState } from "react";
import { editmyPost, writePost } from "../../api/posts";
import { CATEGORIES } from "../auth/RegisterContainer";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Write from "../../components/write/Write";
import uploadToS3 from "../../utils/awsS3";

const WriteContainer = ({ editPost, editTitle, editComplete }) => {
  const navigate = useNavigate();
  const userEmail = jwt_decode(localStorage.getItem("google_token")).email;
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

  useEffect(() => {
    if (editPost) {
      setFormData(editPost);
    }
  }, [editPost]);

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

    if (formData.images.length >= 3) {
      toast.error("3장까지만 업로드 가능합니다.");
      return;
    }
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };

  const onToggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const onClickSelect = (idx) => {
    setOpenSelect(!openSelect);
    setFormData({ ...formData, category: CATEGORIES[idx] });
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

    const uploadPromises = formData.images.map(uploadToS3);

    try {
      const imageUrls = await Promise.all(uploadPromises);
      handlePost(imageUrls);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePost = async (imageUrls) => {
    const updatedFormData = { ...formData, images: imageUrls };
    try {
      if (editPost) {
        const response = await editmyPost(editPost.postId, formData);
        Swal.fire({
          position: "top",
          icon: "success",
          title: "수정 완료 되었습니다 :)",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/${response.data.postId}/detail`);
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

  return (
    <>
      <Write
        formData={formData}
        openSelect={openSelect}
        CATEGORIES={CATEGORIES}
        editTitle={editTitle}
        editComplete={editComplete}
        onToggleSelect={onToggleSelect}
        onClickSelect={onClickSelect}
        onChangeFile={onChangeFile}
        onChangeForm={onChangeForm}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default WriteContainer;
