import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      © 2021 Sweave &nbsp;&nbsp;⏤{" "}
      <ul>
        <li> About</li>
        <li>Privacy</li>
        <li>Pizza</li>
        <li>Contribute</li>
      </ul>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: relative;
  bottom: -85vh;
  padding-left: 130px;
  font-size: 14px;
  display: flex;

  ul {
    margin: 0;
    display: flex;
    flex-direction: row;
    padding: 0;
    padding-left: 10px;
    li {
      list-style: none;
      padding-right: 10px;
    }
  }
`;
