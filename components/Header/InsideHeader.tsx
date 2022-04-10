import React, { useState } from "react";
import styled from "styled-components";
import logo from "@images/gitstory.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Cookies from "js-cookie";

export default function InsideHeader({ withLeftPart = true, withPaddings = false }) {
  const { data: session } = useSession();
  
  const [searchValue, setSearchValue] = useState([]);
  const router = useRouter();
  const slug = router.query.slug || [];

  const handleSearchTextChange = (e) => {
    let value = e.target.value;
    let parsedValues = value.split("/");
    setSearchValue(parsedValues);
  };

  async function saveGitHubSessionToCookie() {
    const sessionInfo = await getSession();
    sessionInfo ? Cookies.set("github_at", sessionInfo.accessToken) : Cookies.remove("github_at");
  }

  const submitSearch = (e) => {
    router.push(`/repo/${slug[0]}/${searchValue[0]}/${searchValue[1]}`);
  };

  const goHome = () => {
    router.push("/");
  };

  // Execute functions 
  saveGitHubSessionToCookie();

  const ProfileBox = () => {
    if (session) {
      return (
        <>
          Signed in as {session.user.email} {"| "}
          <a onClick={() => signOut()}>Sign out</a>
        </>
      );
    }
    return (
      <>
        Not signed in {"| "}
        <a onClick={() => signIn()}>Sign in</a>
      </>
    );
  };

  return (
    <HeaderWrapper>
      <LeftWrapper></LeftWrapper>
      <RightWrapper>Debug 🐞 {">"} <ProfileBox></ProfileBox></RightWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  position: relative;
`;

const LeftWrapper = styled.div``;
const RightWrapper = styled.div``;
