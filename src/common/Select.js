import { css, styled } from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import theme from "../lib/styles/Theme";

const Select = ({
  w,
  value,
  options,
  openSelect,
  placeholder,
  onToggleHandler,
  onClickHandler,
}) => {
  return (
    <SelectStyle openSelect={openSelect} w={w}>
      <li className="selected" onClick={onToggleHandler}>
        {value || placeholder}
        <span>
          <FaChevronDown />
        </span>
      </li>
      <div className="optionBox">
        {openSelect &&
          options.map((option, idx) => (
            <li
              className="unselected"
              key={idx}
              onClick={() => onClickHandler(idx)}
            >
              {option}
            </li>
          ))}
      </div>
    </SelectStyle>
  );
};

export default Select;

export const SelectStyle = styled.div`
  width: ${(props) => props.w || "80%"};
  min-width: 80px;
  max-height: 50px;
  z-index: 100;

  .selected {
    border: 1px solid lightgray;
    border-radius: 30px;
    color: ${(props) => (props.value ? "#676767" : "000")};
  }
  .unselected {
    border-radius: 20px;

    height: 50px;
    &:hover {
      background-color: #e7e7e7c2;
    }
  }

  span {
    padding-top: 4px;
    font-size: 1rem;
  }

  .optionBox {
    border: 1px solid ${theme.lightGrayColor};
    border-radius: 25px;
    margin-top: 10px;
    width: 350px;

    background-color: white;
    ${({ openSelect }) =>
      !openSelect &&
      css`
        border: none;
      `}
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    height: 50px;
    cursor: pointer;
  }
`;
