import React, { useState } from "react";
import styled from "styled-components";
import logo from "@images/gitstory.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header({ withLeftPart = true, withPaddings = false }) {
  const [searchValue, setSearchValue] = useState([]);
  const router = useRouter();
  const slug = router.query.slug || [];

  const handleSearchTextChange = (e) => {
    let value = e.target.value;
    let parsedValues = value.split("/");
    setSearchValue(parsedValues);
  };

  const submitSearch = (e) => {
    router.push(`/repo/${slug[0]}/${searchValue[0]}/${searchValue[1]}`);
  };

  return (
    <HeaderWrapper withPaddings={withPaddings}>
      <LeftPart>
        {withLeftPart ? (
          <>
            <Image onClick={submitSearch} width="135" height="30" src={logo} />
            <SearchBox onChange={handleSearchTextChange} className="" name="" id="" />{" "}
          </>
        ) : (
          ""
        )}
      </LeftPart>
      <RightPart>
        <ul>
          <li>About</li>
          <li>GitHub</li>
          <li>Login</li>
        </ul>
      </RightPart>
    </HeaderWrapper>
  );
}

interface HeaderProps {
  readonly withPaddings: boolean;
}

const HeaderWrapper = styled.div<HeaderProps>`
  display: flex;

  ${(props) =>
    props.withPaddings &&
    `
    padding-left: 130px;
    padding-right: 130px;
    padding-top: 30px;
`}
  justify-content: space-between;
`;

const LeftPart = styled.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
`;

const SearchBox = styled.input`
  background: rgba(0, 0, 0, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-sizing: border-box;
  border-radius: 6px;
  padding-left: 9px;
  padding-right: 9px;
  color: antiquewhite;
  height: 30px;
`;

const RightPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    list-style: inherit;
    display: flex;
    padding: 0;

    margin: 0;
    li {
      font-weight: bold;
      list-style: none;
      padding-right: 10px;
    }
  }
`;
