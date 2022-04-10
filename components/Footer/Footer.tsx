import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      © 2022 Sweave &nbsp;&nbsp;⏤{" "}
      <ul>
        <li>About</li>
        <li>Privacy</li>
        <li>Kit</li>
        <li>Contribute</li>
      </ul>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  position: relative;
  font-size: 14px;
  display: flex;
  margin: auto;
  justify-content: center;
  font-size: 12px;
  margin-top: 8%;

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
