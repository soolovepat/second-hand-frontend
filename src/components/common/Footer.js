import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logoGray } from "../../assets/logo";

const Footer = () => {
  return (
    <FooterBlock>
      <Link to={"/"}>
        <img className="logo-img" src={logoGray} />
      </Link>

      <strong>어떤 내용을 넣을까?</strong>
      <ul>
        <li>Footer</li>
        <li>Footer</li>
      </ul>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.div`
  margin: 150px auto 100px;
  width: 970px;

  line-height: 30px;
`;
