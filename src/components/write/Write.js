import Input from "../../common/Input";
import Header from "../../components/common/Header";
import styled from "styled-components";
import Select from "../../common/Select";
import { Toast } from "../../components/common/Toast";
import Button from "../../common/Button";
import { RiImageAddFill, RiImageFill } from "react-icons/ri";
import { FaCircleExclamation } from "react-icons/fa6";
import theme from "../../lib/styles/Theme";

const Write = ({
  formData,
  openSelect,
  CATEGORIES,
  onToggleSelect,
  onClickSelect,
  onChangeFile,
  onChangeForm,
  onSubmit,
  editTitle,
  editComplete,
}) => {
  return (
    <WriteContainerBlock>
      <Header />
      <h1 className="write-title">{editTitle || "상품 등록하기"}</h1>
      <div className="form">
        <div className="file-wrapper">
          <div className="button-wrapper">
            <label for="file" className="real-button">
              <RiImageAddFill />
              <span>{formData.images.length} / 3</span>
            </label>
            {Array.from({ length: formData.images.length }, (_, index) => (
              <div key={index} className="image-file">
                <RiImageFill />
              </div>
            ))}
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
        <WriteListWrapper>
          <strong>제목</strong>
          <Input
            w={"100%"}
            h={"50px"}
            name="title"
            value={formData.title}
            ph={"상품 이름 (20자 이내)"}
            onChange={onChangeForm}
            maxLength={20}
          />
        </WriteListWrapper>
        <WriteListWrapper>
          <strong>카테고리</strong>
          <Select
            w={"100%"}
            h={"50px"}
            value={formData.category}
            options={CATEGORIES}
            openSelect={openSelect}
            placeholder={"상품 카테고리"}
            onToggleHandler={onToggleSelect}
            onClickHandler={onClickSelect}
          />
        </WriteListWrapper>
        <WriteListWrapper>
          <strong>상품 설명</strong>
          <textarea
            name="content"
            value={formData.content}
            onChange={onChangeForm}
            placeholder="상품 설명 (500자 이내)"
            maxLength={500}
          />
        </WriteListWrapper>
        <WriteListWrapper>
          <strong>가격</strong>
          <Input
            h={"50px"}
            name="price"
            value={formData.price}
            ph={"가격 (만원 이하)"}
            onChange={onChangeForm}
          />
        </WriteListWrapper>
        <WriteListWrapper>
          <strong>거래 희망 장소</strong>
          <Input
            h={"50px"}
            name="location"
            ph={"거래 희망 장소 (20자 이내)"}
            value={formData.location}
            onChange={onChangeForm}
            maxLength={20}
          />
        </WriteListWrapper>
        <Button
          size="lg"
          bgcolor={theme.primaryColor}
          bordercolor={theme.primaryColor}
          color={theme.whiteColor}
          hbgcolor={theme.secondaryColor}
          hbordercolor={theme.secondaryColor}
          hcolor={theme.darkGrayColor}
          onClick={onSubmit}
        >
          {editComplete || "작성완료"}
        </Button>
      </div>
      <Toast />
    </WriteContainerBlock>
  );
};

export default Write;

const WriteContainerBlock = styled.div`
  position: relative;

  .write-title {
    ${theme.h1box}
  }

  .form {
    width: 70%;
    min-width: 450px;
    max-width: 1100px;
    height: 1100px;
    display: flex;
    flex-direction: column;
    gap: 26px;

    margin: 0 auto;
    padding: 0 80px;
    position: relative;
    background: white;

    button {
      margin: 30px auto 0;
    }
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 10px;
    line-height: 50px;
  }

  .file-wrapper {
    margin-bottom: 10px;

    > span {
      font-size: 14px;
      color: ${(props) => props.theme.mediumGrayColor};

      svg {
        margin-right: 6px;
        vertical-align: middle;
      }
    }
  }

  .file-input {
    display: none;
    border: 2px solid red;
  }

  .real-button {
    display: flex;
    align-items: center;

    width: fit-content;
    border: 1px solid ${theme.lightGrayColor};
    border-radius: 28px;
    color: ${theme.mediumGrayColor};
    padding: 0 20px;
    line-height: 50px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${theme.secondaryColor};
      border: 1px solid ${theme.secondaryColor};
      color: ${theme.darkGrayColor};
    }

    > span {
      margin-left: 10px;
      font-size: 18px;
    }
  }

  .image-file {
    display: flex;
    align-items: center;
    border: 1px solid ${theme.lightGrayColor};
    border-radius: 28px;
    font-size: 24px;
    color: ${theme.darkGrayColor};
    background-color: ${theme.lightGrayColor};
    padding: 12px 20px;
  }

  textarea {
    height: 300px;
    border: 1px solid ${theme.lightGrayColor};
    border-radius: 25px;
    padding: 14px 20px;
    font-size: 1rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${theme.mediumGrayColor};
    }
  }
`;

const WriteListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  strong {
    font-size: 16px;
    color: ${(props) => props.theme.mediumGrayColor};
    margin-left: 22px;
  }
`;
