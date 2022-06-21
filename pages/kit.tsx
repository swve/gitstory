import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import React from "react";
import styled from "styled-components";

function About() {
  return (
    <>
      <GradientHeader>
        <Header disable_api_usage_check title={`About`} desc="Back in time and explore your favorite Open source projects"></Header>
        <AboutWrapper>
          <img src="/img/gitstorykit_transparent.png" height="60" /> <h1>A light git time machine JavaScript library</h1>
          <AboutElements>
            <InstallBox>
              <p>
                npm install <b>gitstorykit</b>
              </p>
            </InstallBox>
          </AboutElements>
          <LinkToReadme>
            <a target={"_blank"} href="https://github.com/swve/gitstorykit/blob/master/README.md">
              README.md
            </a>
          </LinkToReadme>
          <MadeBy>
            <p>
              Made with{" "}
              <span role="img" aria-label="heart">
                💜
              </span>{" "}
              by{" "}
              <a target={"_blank"} href="https://twitter.com/sw3ave">
                <img src="/img/sweave.png" height="12" alt="" />
              </a>
            </p>
          </MadeBy>
        </AboutWrapper>
      </GradientHeader>
      <Footer></Footer>
    </>
  );
}

const LinkToReadme = styled.div`
  margin: auto;
  margin-top: 50px;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  color: #ffffff;
  text-underline-offset: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

const MadeBy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
  img {
    margin-top: 0px !important;
  }
`;

const InstallBox = styled.div`
  display: flex;
  margin: auto;
  background-color: #09090a5c;
  color: white;
  font-family: Monaco, sans-serif;
  font-weight: 500;
  border-radius: 12px;
  padding: 9px 30px 9px 30px;
`;

const AboutElements = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  margin-left: 120px;
  margin-right: 120px;

  @media (max-width: 768px) {
    margin-left: 60px;
    margin-right: 60px;
  }
  flex-wrap: wrap;
`;

const AboutWrapper = styled.div`
  text-align: center;

  img {
    margin-top: 140px;
  }

  h1 {
    margin-top: 0px;
    width: 700px;
    margin: auto;
    padding-top: 20px;
    font-size: 45px;
    line-height: 42px;
    letter-spacing: -1.2px;

    @media (max-width: 768px) {
      width: 90%;
      line-height: 25px;
      font-weight: bolder;
      font-size: 25px !important;
    }
  }
`;

const GradientHeader = styled.div`
  height: 820px;
  padding-left: 130px;
  padding-right: 130px;
  @media (max-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }

  padding-top: 30px;
  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%),
    linear-gradient(228.87deg, rgba(69, 80, 174, 0.54) 9.05%, rgba(227, 9, 88, 0.27) 51.25%, rgba(255, 255, 255, 0) 84.11%),
    linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 36.13%, rgba(221, 50, 13, 0.71) 127.92%);

  h1 {
    padding-top: 20px;
    font-size: 45px;
  }

  // media query for mobile
  @media (max-width: 1500px) {
    height: 1650px;
  }
`;
export default About;
