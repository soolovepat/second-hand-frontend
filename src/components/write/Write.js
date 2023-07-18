import Input from "../../common/Input";
import Header from "../../components/common/Header";
import styled from "styled-components";
import Select from "../../common/Select";
import { Toast } from "../../components/common/Toast";
import Button from "../../common/Button";
import { RiImageAddFill } from "react-icons/ri";
import { FaCircleExclamation } from "react-icons/fa6";

const Write = ({
  formData,
  openSelect,
  CATEGORIES,
  numberOfImage,
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
        <div className="file-wrapper">
          <div className="button-wrapper">
            <label for="file" className="real-button">
              <RiImageAddFill />
            </label>
            <span>{numberOfImage} / 3</span>
          </div>
          <span>
            <FaCircleExclamation />
            jpg 파일만 업로드 가능합니다
          </span>
        </div>

        <input
          className="file-input"
          type="file"
          multiple
          placeholder="사진 추가하기 (최대 3장)"
          name={"img"}
          onChange={onChangeFile}
          id="file"
        />
        <Input
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

    button {
      margin: 0 auto;
    }
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    > span {
      margin-left: 20px;
    }
  }

  .file-wrapper > span {
    font-size: 14px;
    color: ${(props) => props.theme.mediumGrayColor};

    svg {
      margin-right: 6px;
      vertical-align: middle;
    }
  }

  .file-input {
    display: none;
    border: 2px solid red;
  }

  .real-button {
    width: fit-content;
    background-color: black;
    border-radius: 28px;
    color: white;
    padding: 2px 14px 0;
    line-height: 50px;
    font-size: 24px;
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
    font-size: 1.1rem;
    margin: 50px 0px;
  }
`;
