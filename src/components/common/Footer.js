import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoGray } from "../../assets/logo";
import { FaGithub } from "react-icons/fa";
import theme from "../../lib/styles/Theme";

const Footer = () => {
  return (
    <FooterBlock>
      <Link to={"/"}>
        <img className="logo-img" alt="footer-logo" src={logoGray} />
      </Link>
      <Link
        to={"https://github.com/nayoung3669/second-hand-frontend"}
        className="github">
        <FaGithub />
      </Link>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  margin: 150px auto 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 200px;
  background-color: ${theme.mediumGrayColor};

  .logo-img {
    width: 250px;
  }
  .github {
    font-size: 3.5rem;
    color: ${theme.darkGrayColor};
  }
`;
