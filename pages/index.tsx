import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import React, { useState } from "react";
import logo from "@images/gitstory.png";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Home() {
  const [searchValue, setSearchValue] = useState([]);
  const router = useRouter();
  const slug = router.query.slug || [];

  const handleSearchTextChange = (e) => {
    let value = e.target.value;
    let parsedValues = value.split("/");
    setSearchValue(parsedValues);
  };

  return (
    <HomePage>
      <Header withLeftPart={false} withPaddings></Header>
      <Hero>
        <Image className="logo" width="135" height="30" src={logo} />
        <SearchBar>
          <SearchBox onChange={handleSearchTextChange} className="" name="" id="" />{" "}
        </SearchBar>
      </Hero>
      <Footer></Footer>
    </HomePage>
  );
}

const HomePage = styled.div`
  background: linear-gradient(180deg, #13161a 0%, rgba(39, 49, 55, 0.52) 100%), linear-gradient(243.33deg, #280b7d 5.62%, #245aaa 74.42%, #0dd1dd 127.92%);
  height: 100vh;
`;

const Hero = styled.div`
  padding-left: 220px;
  padding-right: 220px;
  display: flex;
  .logo {
    margin-right: 20px;
  }
`;
const SearchBar = styled.div``;
const SearchBox = styled.input`
  width: 435px;
  height: 68px;
  left: 681px;
  top: 481px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37));
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-sizing: border-box;
  border-radius: 10px;
  color: aliceblue;
`;
