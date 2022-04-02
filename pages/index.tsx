import React, { useState } from "react";
import logo from "@images/gitstory.png";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/router";
import { updateDate } from "@redux/actions";

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

  const TestDate = new Date("2020-01-01");
  console.log(state);

  const handleSearchTextChange = (e) => {
    let value = e.target.value;
    let parsedValues = value.split("/");
    setSearchValue(parsedValues);
  };

  return (
    <HomePage>
      {state ? <h1>Testing page </h1> : <h1>Test2 </h1>}
      <button
        onClick={() => {
          dispatch(
            updateDate({
              day: 11,
              month: 11,
              year: 1,
            })
          );
        }}
      >
        debug redux button
      </button>
    </HomePage>
  );
}

const HomePage = styled.div`
  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%), linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 74.42%, #0dd1dd 127.92%);
  height: 100vh;
`;
