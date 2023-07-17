import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "../../common/Input";
import Header from "../../components/common/Header";
import styled from "styled-components";
import Select from "../../common/Select";
import { writePost } from "../../api/posts";
import { CATEGORIES } from "../auth/RegisterContainer";
import { toast } from "react-toastify";
import { Toast } from "../../components/common/Toast";
import Button from "../../common/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

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
    <WriteContainerBlock>
      <Header />
      <div className="write-header">상품 등록하기</div>
      <div className="form">
        <input
          className="file-input"
          type="file"
          placeholder="사진 추가하기 (최대 3장)"
          name={"img"}
          onChange={onChangeFile}
        />
        <Input
          w={"300px"}
          h={"80px"}
          name="title"
          value={formData.title}
          ph={"상품 이름 (20자 이내)"}
          onChange={onChangeForm}
          maxLength={20}
        />
        <Select
          w={"50%"}
          h={"80px"}
          value={formData.category}
          options={CATEGORIES}
          openSelect={openSelect}
          placeholder={"상품 카테고리"}
          onToggleHandler={onToggleSelect}
          onClickHandler={onClickSelect}
        />
        {/* textarea? */}
        <textarea
          name="content"
          value={formData.content}
          onChange={onChangeForm}
          placeholder="상품 설명 (500자 이내)"
          maxLength={500}
        />
        <Input
          w={"300px"}
          h={"80px"}
          name="price"
          value={formData.price}
          ph={"가격 (만원 이하)"}
          onChange={onChangeForm}
        />
        <Input
          w={"300px"}
          h={"80px"}
          name="location"
          ph={"거래 희망 장소 (20자 이내)"}
          onChange={onChangeForm}
          maxLength={20}
        />
        <Button size="lg" color={"black"} onClick={onSubmit}>
          작성완료
        </Button>
      </div>
      <Toast />
    </WriteContainerBlock>
  );
};

export default WriteContainer;

const WriteContainerBlock = styled.div`
  .form {
    width: 70%;
    min-width: 450px;
    max-width: 1100px;
    margin: auto;
    height: 1100px;
    border: 2px solid #ccc;
    border-radius: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 80px;
    position: relative;
  }

  .file-input {
    font-size: 1.1rem;
  }
  .write-header {
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
  }
  textarea {
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 15px;
    font-size: 1.2rem;
    margin: 50px 0px;
  }

  button {
    font-size: 1.125rem;
    position: absolute;
    bottom: 5%;
    right: 43%;
  }
`;

//post-> header: multi function (endpoint: lamda function, api gateway) -> S3 (이미지 버킷에 저장)
