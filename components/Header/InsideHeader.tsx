import React, { useState } from "react";
import styled from "styled-components";
import logo from "@images/gitstory.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function InsideHeader({ withLeftPart = true, withPaddings = false }) {
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

  const goHome = () => {
    router.push("/");
  };


  return (
    <HeaderWrapper>
      <LeftWrapper></LeftWrapper>
      <RightWrapper>Debug 🐞 {">"} Login - Status : Unavailable</RightWrapper>
    </HeaderWrapper>
  );
}


const HeaderWrapper = styled.div`
  position: relative;
`

const LeftWrapper = styled.div``
const RightWrapper = styled.div``

