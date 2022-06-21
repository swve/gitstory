import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Footer(props) {
  return (
    <>
      <FooterCopyright home={props.home}>
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
            <Link href={`/kit`}>
              <a >Kit</a>
            </Link>
          </li>
          <li>
            <Link href={`https://github.com/swve/gitstory`}>
              <a target={"_blank"}>GitHub</a>
            </Link>
          </li>
          <li>
            <Link href={`/sponsoring`}>
              <a>Sponsoring</a>
            </Link>
          </li>
          <li>
            <Link href={`https://forms.gle/GRacRdWYuGCjA1HZ8`}>
              <a target={"_blank"}>Feedback</a>
            </Link>
          </li>
        </ul>
      </FooterCopyright>
    </>
  );
}

const FooterCopyright: any = styled.div`
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
