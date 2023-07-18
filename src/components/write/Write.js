import Input from "../../common/Input";
import Header from "../../components/common/Header";
import styled from "styled-components";
import Select from "../../common/Select";
import { Toast } from "../../components/common/Toast";
import Button from "../../common/Button";

const Write = ({
  formData,
  openSelect,
  CATEGORIES,
  onToggleSelect,
  onClickSelect,
  onChangeFile,
  onChangeForm,
  onSubmit,
}) => {
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
        <div className="real-button">파일 추가하기</div>
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

export default Write;

const WriteContainerBlock = styled.div`
  position: relative;

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
    background: white;
  }

  .file-input {
    height: 40px;
    width: 180px;
    border: 2px solid red;
    position: absolute;
    left: 80px;
    font-size: 1.1rem;
    opacity: 0;
    cursor: pointer;
  }

  .real-button {
    height: 40px;
    width: 180px;
    background-color: black;
    border-radius: 25px;
    color: white;
    padding-top: 10px;
    text-align: center;
    cursor: pointer;
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
