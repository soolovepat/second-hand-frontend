import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { jobs_hero, nearby_stores } from "../../assets/bannerImages";

const Carousel = () => {
  const example = [
    {
      title: ["남에게 더 가치있게.", <br />, "만원의 행복  🛍️"],
      content: "사용하지 않는 물건을 등록해보세요!",
      img: jobs_hero,
    },
    {
      title: `두번째 배너 :)`,
      content: "설명입니다!",
      img: nearby_stores,
    },
  ];

  const [currImgIndex, setCurrImgIndex] = useState(0);

  const onIncreaseIdx = () => {
    if (currImgIndex >= example.length - 1) {
      toast.warn("마지막 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex + 1);
    }
  };
  const onDecreaseIdx = () => {
    if (currImgIndex <= 0) {
      toast.warn("첫번째 사진입니다.");
    } else {
      setCurrImgIndex(currImgIndex - 1);
    }
  };
  return (
    <BannerBlock>
      <div className="carousel">
        <div
          className="banner-container"
          style={{ transform: `translateX(-${currImgIndex * 100}%)` }}
        >
          {example.map((banner, idx) => (
            <div key={idx} className="banner-wrapper">
              <span className="banner-text">
                <strong className="title">{banner.title}</strong>
                <p className="content">{banner.content}</p>
              </span>
              <span className="banner-img">
                <img src={banner.img} alt="banner" />
              </span>
            </div>
          ))}
        </div>
        <p className="icons left">
          <FaChevronLeft onClick={onDecreaseIdx} />
        </p>
        <p className="icons right">
          <FaChevronRight onClick={onIncreaseIdx} />
        </p>
      </div>

      <CarouselDots currImgIndex={currImgIndex} imgLength={example.length} />
    </BannerBlock>
  );
};

const CarouselDots = ({ currImgIndex, imgLength }) => {
  return (
    <DotsBlock>
      {Array(imgLength)
        .fill(null)
        .map((_, idx) => (
          <Dot key={idx} active={currImgIndex === idx} />
        ))}
    </DotsBlock>
  );
};

export default Carousel;

const BannerBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid lightgray;
  background-color: #d9d9d9;

  .carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;

    .banner-container {
      display: flex;
      transition: transform 0.5s ease-out;
      width: 100%;
      position: relative;
    }
    .icons {
      position: absolute; // 아이콘들을 절대 위치로 배치해 주세요.
      top: 50%;
      transform: translateY(-50%);
      font-size: 2rem;
      color: gray;
      cursor: pointer;
      width: auto;

      &.left {
        left: 10px;
      }

      &.right {
        right: 10px;
      }
    }

    .banner-wrapper {
      flex: 0 0 100%;
      align-items: center;
      max-width: 100%;
      display: flex;
      justify-content: center;

      .banner-text {
        width: 20%;
      }

      .banner-img {
        display: flex;
        height: 100%;
        align-items: end;
        max-width: 40%;
        max-height: 300px;
        margin-left: 30px;

        img {
          width: 100%;
        }
      }
    }
  }

  .icons {
    width: 100px;
  }

  .title {
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.8rem;
  }

  .content {
    /* width: 100%;
    text-align: start;
    min-height: 200px; */
    margin-top: 14px;

    font-size: 1rem;
    font-weight: 600;
    line-height: 1.8rem;
  }
`;

const DotsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  padding: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  margin: 0 5px;

  ${(props) =>
    props.active &&
    css`
      background: #333;
    `}
`;
