import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Cookies from "js-cookie";
import LogoutIcon from "@mui/icons-material/Logout";
import { GitSt } from "@services/gitstory";
import Dialog from "@components/Dialog/Dialog";
import SignWithGitHub from "@components/Buttons/SignWithGitHub";
import { getExampleRepo } from "@services/example_repos";
import FancyRender from "@components/Loading/FancyRender";

export default function Header({ withLeftPart = true, withPaddings = false, ...props }) {
  const { data: session, status } = useSession();

  const [headerSearchValue, setHeaderSearchValue] = useState([]);
  const [apiUsageCounter, setApiUsageCounter] = useState(0);
  const [openApiPopup, setOpenApiPopup] = React.useState(false);

  const router = useRouter();

  const handleHeaderSearchTextChange = (e) => {
    let parsedValues = e.target.value.split("/");
    setHeaderSearchValue(parsedValues);
  };

  async function checkApiUsage() {
    const GitStory = new GitSt();
    GitStory.init({ client: "github", owner: "swve", repo: "framestack" });
    let api_usage_counter = await GitStory.getApiUsage();
    setApiUsageCounter(api_usage_counter);
    const visitor_limitation = 60;
    const signed_user_limitation = 5000;
    let api_limitation = session ? signed_user_limitation : visitor_limitation;
    if (apiUsageCounter > api_limitation) {
      setOpenApiPopup(true);
    } else {
      setOpenApiPopup(false);
    }
  }

  async function saveGitHubSessionToCookie() {
    session ? Cookies.set("github_at", session.accessToken) : Cookies.remove("github_at");
  }

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      router.push("/calendar/github/" + headerSearchValue[0] + "/" + headerSearchValue[1]);
    }
  };

  const goHome = () => {
    router.push("/");
  };

  saveGitHubSessionToCookie();
  if (props.disable_api_usage_check) {
    //setOpenApiPopup(true);
  } else {
    checkApiUsage();
  }

  const ProfileBox = () => {
    if (status === "loading") {
      return <SignWithGitHub withLoading onclick={() => signIn()}></SignWithGitHub>;
    }
    if (session) {
      return (
        <SessionWrapper>
          <span>{session.user.name}</span>
          <img src={session.user.image}></img>
          <a aria-label="Logout" onClick={() => signOut()}>
            <LogoutIcon sx={{ fontSize: 17 }} />
          </a>
        </SessionWrapper>
      );
    } else {
      return (
        <>
          <SignWithGitHub onclick={() => signIn()}> </SignWithGitHub>
        </>
      );
    }
  };

  return (
    <HeaderWrapper withPaddings={withPaddings}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{props.title} | GitStory </title>
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* SEO */}
        <meta name="description" content={props.desc} />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta property="og:site_name" content="GitStory" />
        <meta name="apple-mobile-web-app-title" content="GitStory"></meta>
        <meta content="en" http-equiv="Content-Language"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.desc} />
        <link rel="shortcut icon" href={process.env.WEBSITE_HOST + "/img/favicon.ico"} type="image/x-icon" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={process.env.WEBSITE_HOST + "/img/gitstory.png"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.desc} />
        <meta name="twitter:url" content={process.env.WEBSITE_HOST} />
        <meta name="twitter:image" content={process.env.WEBSITE_HOST + "/img/gitstory.png"} />
        <meta name="twitter:site" content="@graphicmade" />
        <meta property="og:site_name" content="Gitstory"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="en-EN"></meta>
        <meta name="twitter:creator" content="@graphicmade"></meta>
        <meta name="theme-color" content="#17161b"></meta>
        {/* SEO */}

        <link key="0" rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png"></link>
        <link key="1" rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png"></link>
        <link key="2" rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png"></link>
      </Head>
      <LeftWrapper withLeftPart={withLeftPart}>
        <img onClick={goHome} src="/img/index_logo.png" width="120" height="34" />
        <SearchBoxHeader
          onKeyDown={keyPress}
          onChange={handleHeaderSearchTextChange}
          placeholder={"Explore GitHub projects, e.g. : " + getExampleRepo()}
        ></SearchBoxHeader>
      </LeftWrapper>
      <RightWrapper>
        <ProfileBox></ProfileBox>
      </RightWrapper>

      {/* POPUP */}
      <Dialog visible={openApiPopup}></Dialog>
    </HeaderWrapper>
  );
}

const SearchBoxHeader = styled.input`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.37), rgba(0, 0, 0, 0.37));
  border: 1px solid rgb(255 255 255 / 0%);
  box-sizing: border-box;
  border-radius: 7px;
  padding-left: 16px;
  font-size: 14px;
  margin-left: 20px;
  width: 600px;
  height: 40px;
  color: white;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 80%;
  }

  &:focus {
    outline: none;
    width: 700px;
    font-size: 16px;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.13);
  }
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
    font-size: 13px;
  }

  img {
    width: 30px;
    border-radius: 25px;
    margin-right: 20px;
  }
`;
const RightWrapper = styled.div`
  @media (max-width: 768px) {
    margin: auto;
    margin-bottom: 30px;
  }
`;
// CSS
const HeaderWrapper: any = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: ${(props: any) => (props.withPaddings === true ? 130 : 0)}px;
  padding-right: ${(props: any) => (props.withPaddings === true ? 130 : 0)}px;
  padding-top: ${(props: any) => (props.withPaddings === true ? 30 : 0)}px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-left: ${(props: any) => (props.withPaddings === true ? 60 : 0)}px;
    padding-right: ${(props: any) => (props.withPaddings === true ? 60 : 0)}px;
  }
`;

const LeftWrapper: any = styled.div`
  opacity: ${(props: any) => (props.withLeftPart === true ? 1 : 0)};
  display: flex;
  img {
    cursor: pointer;
    justify-self: center;
    margin-top: 5px;
  }
`;
