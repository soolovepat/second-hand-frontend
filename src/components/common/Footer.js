import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBlock>
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
