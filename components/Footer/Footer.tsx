import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Footer(props) {
  return (
    <FooterWrapper home={props.home}>
      © 2022 Sweave &nbsp;&nbsp;⏤{" "}
      <ul>
        <li>
          <Link href={`/about`}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href={`/privacy`}>
            <a>Privacy</a>
          </Link>
        </li>
        <li>
          <Link href={`https://github.com/swve/gitstorykit`}>
            <a target={"_blank"}>Kit</a>
          </Link>
        </li>
        <li>
          <Link href={`https://github.com/swve/gitstorykit/blob/master/CONTRIBUTING.md`}>
            <a target={"_blank"}>Contribute</a>
          </Link>
        </li>
      </ul>
    </FooterWrapper>
  );
}

const FooterWrapper: any = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  justify-content: center;
  font-size: 12px;
  margin-top: ${(props: any) => (props.home ? "8%" : "2%")};
  padding-bottom: ${(props: any) => (props.home ? "0%" : "3%")};

  @media (max-width: 768px) {
    font-size: 10px;
  }

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
