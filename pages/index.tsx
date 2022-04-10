import React, { useState } from "react";
import logo from "@images/gitstory.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import { updateDate } from "@redux/actions";
import InsideHeader from "@components/Header/InsideHeader";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Footer from "@components/Footer/Footer";

interface RootState {
  selectedDate: string;
}

export default function Home() {
  const [searchValue, setSearchValue] = useState([]);
  const state = useSelector((state: RootState) => state.selectedDate);
  const router = useRouter();
  const dispatch = useDispatch();
  const slug = router.query.slug || [];
  // get date in iso format

  const handleSearchTextChange = (e) => {
    let value = e.target.value;
    let parsedValues = value.split("/");
    setSearchValue(parsedValues);
  };

  // Home search
  const keyPress = (e) => {
    if (e.keyCode == 13) {
      router.push("/calendar/github/" + searchValue[0] + "/" + searchValue[1]);
    }
  };

  return (
    <HomePage>
      <LogoBox>
        {" "}
        <img src="/img/index_logo.png" width="250" height="70" />{" "}
      </LogoBox>
      <DescriptionBox>
        <img alt="Internet's git time machine" src="/img/description.png" />
      </DescriptionBox>
      <Search>
        <SearchBox  onKeyDown={keyPress} onChange={handleSearchTextChange} placeholder="Explore GitHub projects, e.g. : vercel/next.js"></SearchBox>
        <span>Press Enter/Return to search <KeyboardReturnIcon sx={{ fontSize: 10 }} /></span>
      </Search>
    <Footer></Footer>
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
  padding-top: 140px;
`;

const DescriptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  img {
    width: 30%;
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
    background: linear-gradient(0deg,rgba(0,0,0,0.37),rgba(0,0,0,0.37));
    border: 1px solid rgb(255 255 255 / 0%);
    box-sizing: border-box;
    border-radius: 7px;
    margin-top: 40px;
    padding-left: 16px;
    font-size: 17px;
    color: white;
    ::placeholder {
      color: rgba(255, 255, 255, 0.13);;
    }`;
