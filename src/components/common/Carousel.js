import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled, { css } from "styled-components";

const Carousel = ({ example, currItemIndex, setCurrItemIndex }) => {
  const onIncreaseIdx = () => {
    if (currItemIndex >= example.length - 1) {
      setCurrItemIndex(0);
    } else {
      setCurrItemIndex(currItemIndex + 1);
    }
  };
  const onDecreaseIdx = () => {
    if (currItemIndex <= 0) {
      setCurrItemIndex(example.length - 1);
    } else {
      setCurrItemIndex(currItemIndex - 1);
    }
  };
  return (
    <>
      <div className="carousel">
        <div
          className="banner-container"
          style={{ transform: `translateX(-${currItemIndex * 100}%)` }}
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

      <CarouselDots currItemIndex={currItemIndex} itemLength={example.length} />
    </>
  );
};

const CarouselDots = ({ currItemIndex, itemLength }) => {
  return (
    <DotsBlock>
      {Array(itemLength)
        .fill(null)
        .map((_, idx) => (
          <Dot key={idx} active={currItemIndex === idx} />
        ))}
    </DotsBlock>
  );
};

export default Carousel;

const DotsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 350px;
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
