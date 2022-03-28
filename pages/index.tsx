import React, { useState } from "react";
import logo from "@images/gitstory.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import { updateDate } from "@redux/actions";

interface RootState {
  date: string;
}

export default function Home() {
  const [searchValue, setSearchValue] = useState([]);
  const state = useSelector((state: RootState) => state.date);
  const router = useRouter();
  const dispatch = useDispatch();
  const slug = router.query.slug || [];
  // get date in iso format 


  console.log(state);
  
  const handleSearchTextChange = (e) => {
    let value = e.target.value;
    let parsedValues = value.split("/");
    setSearchValue(parsedValues);
  };


  return <HomePage>

    { state ? <h1>Hey you're good to go </h1> : <h1>No :/ </h1>}
    <button onClick={() => {dispatch(updateDate(new Date().toISOString()))}}>debug redux button</button>
    
    </HomePage>;
}

const HomePage = styled.div`
  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%), linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 74.42%, #0dd1dd 127.92%);
  height: 100vh;
`;
