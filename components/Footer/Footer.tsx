import React from "react";
import styled from "styled-components";

export default function Footer(props ) {
  return (
    <FooterWrapper home={props.home}>
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

const FooterWrapper: any = styled.div`
  position: relative;
  font-size: 14px;
  display: flex;
  margin: auto;
  justify-content: center;
  font-size: 12px;
  margin-top: ${(props : any) => (props.home ? "8%" : "2%")};
  padding-bottom: ${(props : any) => (props.home ? "0%" : "3%")};

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
