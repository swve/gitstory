import React, { useState } from "react";
import styled from "styled-components";
import logo from "@images/gitstory.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Cookies from "js-cookie";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Header({ withLeftPart = true, withPaddings = false }) {
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

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      router.push("/calendar/github/" + searchValue[0] + "/" + searchValue[1]);
    }
  };

  const goHome = () => {
    router.push("/");
  };

  // CSS
  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: ${withPaddings === true ? 130 : 0}px;
    padding-right: ${withPaddings === true ? 130 : 0}px;
    padding-top: ${withPaddings === true ? 30 : 0}px;
  `;

  const LeftWrapper = styled.div`
    opacity: ${withLeftPart === true ? 1 : 0};
    display: flex;
    img {
      cursor: pointer;
      justify-self: center;
      margin-top: 5px;
    }
  `;

  // Execute functions
  saveGitHubSessionToCookie();

  const ProfileBox = () => {
    if (session) {
      return (
        <>
          <SessionWrapper>
            <span>{session.user.name}</span>
            <img src={session.user.image}></img>
            <a aria-label="Logout" onClick={() => signOut()}>
              <LogoutIcon sx={{ fontSize: 17 }} />
            </a>
          </SessionWrapper>
        </>
      );
    }
    return (
      <>
        <BtnSignInWithGitHub onClick={() => signIn()}>
          Sign in with GitHub <GitHubIcon sx={{ fontSize: 13 }} />
        </BtnSignInWithGitHub>
      </>
    );
  };

  return (
    <HeaderWrapper>
      <LeftWrapper>
        <img onClick={goHome} src="/img/index_logo.png" width="120" height="34" />
        <SearchBoxHeader onKeyDown={keyPress} onChange={handleSearchTextChange} placeholder="Explore GitHub projects, e.g. : vercel/next.js"></SearchBoxHeader>
      </LeftWrapper>
      <RightWrapper>
        <ProfileBox></ProfileBox>
      </RightWrapper>
    </HeaderWrapper>
  );
}

const LogoWrapper = styled.div``;
const SearchBoxHeader = styled.input`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37));
  border: 1px solid rgb(255 255 255 / 0%);
  box-sizing: border-box;
  border-radius: 7px;
  padding-left: 16px;
  font-size: 14px;
  margin-left: 20px;
  width: 700px;
  height: 40px;
  color: white;

  ::placeholder {
    color: rgba(255, 255, 255, 0.13);
  }
`;

const BtnSignInWithGitHub = styled.button`
  background-color: #0a0e12;
  color: white;
  font-size: 14px;
  font-family: "Inter";
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 12px;
`;

const SessionWrapper = styled.div`
  justify-content: space-between;
  //center horizontal
  display: flex;
  align-items: center;

  a {
    cursor: pointer;
  }

  span {
    margin-right: 20px;
  }

  img {
    width: 30px;
    border-radius: 25px;
    margin-right: 20px;
  }
`;
const RightWrapper = styled.div``;
