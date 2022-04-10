import React, { useState } from "react";
import logo from "@images/gitstory.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import { updateDate } from "@redux/actions";
import InsideHeader from "@components/Header/InsideHeader";

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

  const submitSearch = (e) => {
    router.push("/calendar/github/" + searchValue[0] + "/" + searchValue[1]);
  }

  

  return (
    <HomePage>
      <InsideHeader></InsideHeader>
      <SearchBox onChange={handleSearchTextChange} className="" name="" id="" />{" "}
      <button onClick={submitSearch} type="submit">Go</button>
    </HomePage>
  );
}

const HomePage = styled.div`
  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%), linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 74.42%, #0dd1dd 127.92%);
  height: 100vh;
`;

const SearchBox = styled.input`
  width: 235px;
  height: 28px;
  left: 681px;
  top: 481px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37));
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-sizing: border-box;
  border-radius: 10px;
  color: aliceblue;
`;