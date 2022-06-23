import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from 'next/image';
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";

export default function Home() {
  const [searchValue, setSearchValue] = useState([]);
  const router = useRouter();

  const handleSearchTextChange = (e) => {
    let value = e.target.value;
    let parsedValues = value.split("/");
    setSearchValue(parsedValues);
  };

  // Home search
  const keyPress = (e) => {
    if (e.keyCode == 13) {
      router.push("/calendar/github/" + searchValue[0] + "/" + searchValue[1]);
      // push with window.location.href
      // detect if user is from a mobile device
      if (window.innerWidth < 768) {
        window.location.href = "/calendar/github/" + searchValue[0] + "/" + searchValue[1];
      }
    }
  };

  return (
    <HomePage>
      <Header disable_api_usage_check withLeftPart={false} withPaddings={true} title="Home" desc="Internet's Git time machine."></Header>
      <LogoBox>
        {" "}
        <Image alt="GitStory logo" src={"/img/index_logo.png"} height="70px" width="242px"></Image>
         <span>Beta</span>
      </LogoBox>
      <DescriptionBox>
        <Image alt="Internet's git time machine" src={"/img/description.png"} height="235px" width="420px"></Image>
      </DescriptionBox>
      <Search>
        <SearchBox onKeyDown={keyPress} onChange={handleSearchTextChange} placeholder="Explore GitHub projects, e.g. : torvalds/linux"></SearchBox>
        <span>
          Press Enter/Return to search <KeyboardReturnIcon sx={{ fontSize: 10 }} />
        </span>
      </Search>
      <Footer home={true}></Footer>
    </HomePage>
  );
}

const HomePage = styled.div`
  //background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%), linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 74.42%, #0dd1dd 127.92%);
  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%),
    linear-gradient(228.87deg, rgba(69, 80, 174, 0.54) 9.05%, rgba(227, 9, 88, 0.27) 51.25%, rgba(255, 255, 255, 0) 84.11%),
    linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 36.13%, rgba(221, 50, 13, 0.71) 127.92%);
  height: 100vh;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 90px;

  img {
    height: 70px;

    @media (max-width: 768px) {
      height: 30px;
    }
  }

  span {
    font-size: 7px;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.2;
    letter-spacing: 0.5px;
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  img {
    width: 420px;

    @media (max-width: 768px) {
      width: 50%;
    }
  }
`;

const Search = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;

  span {
    padding-top: 12px;
    font-size: 10px;
    color: #ffffff66;
    display: -ms-flexbox;
    -ms-flex-pack: left;
  }
`;

const SearchBox = styled.input`
  width: 550px;
  height: 41px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37));
  border: 1px solid rgb(255 255 255 / 0%);
  box-sizing: border-box;
  border-radius: 7px;
  margin-top: 40px;
  padding-left: 16px;
  font-size: 17px;
  color: white;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 250px;
    margin-top: 10px;
    font-size: 9px;
    height: 31px;
  }

  &:focus {
    outline: none;
    width: 700px;
    font-size: 16px;

    @media (max-width: 768px) {
      width: 270px;
      font-size: 10px;
      height: 31px;
    }

    ::placeholder {
      color: rgba(255, 255, 255, 0.33);
    }
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.13);
  }
`;
