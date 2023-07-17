import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { writePost } from "../../api/posts";
import { CATEGORIES } from "../auth/RegisterContainer";
import { toast } from "react-toastify";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Write from "../../components/write/Write";

const WriteContainer = () => {
  const navigate = useNavigate();
  const id = uuidv4();
  const userEmail = jwt_decode(localStorage.getItem("google_token")).email;

  const [formData, setFormData] = useState({
    id: id,
    username: userEmail,
    title: "",
    content: "",
    price: "",
    category: "",
    location: "",
    isSold: false,
    img: [],
  });
  const [openSelect, setOpenSelect] = useState(false);

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    if (name === "price" && isNaN(value)) {
      toast.error("숫자만 입력해주세요.");
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const onChangeFile = (e) => {
    const { files } = e.target;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: [...formData.img, reader.result] });
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const onToggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const onClickSelect = (idx) => {
    setOpenSelect(!openSelect);
    setFormData({ ...formData, category: CATEGORIES[idx] });
  };

  const handlePost = async () => {
    try {
      const response = await writePost(formData);
      console.log(response);
      Swal.fire({
        position: "top",
        icon: "success",
        title: "작성 완료 되었습니다 :)",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(`/${formData.id}/detail`);
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (Number(formData.price) > 10000) {
      toast.error("만원 이하의 가격만 입력해주세요.");
      return;
    }
    if (!Object.values(formData).every((item) => item !== "")) {
      toast.error("정보를 모두 입력해주세요.");
      return;
    }
    handlePost();

    setFormData({
      ...formData,
      id: uuidv4(),
      title: "",
      content: "",
      price: "",
      category: "",
      location: "",
      img: [],
    });
  };

  return (
    <Write
      formData={formData}
      openSelect={openSelect}
      CATEGORIES={CATEGORIES}
      onToggleSelect={onToggleSelect}
      onClickSelect={onClickSelect}
      onChangeFile={onChangeFile}
      onChangeForm={onChangeForm}
      onSubmit={onSubmit}
    />
  );
};

export default WriteContainer;
