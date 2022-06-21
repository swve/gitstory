import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import React from "react";
import styled from "styled-components";

function Privacy() {
  return (
    <>
      <GradientHeader>
        <Header disable_api_usage_check title={`Sponsorships`} desc="Support GitStory"></Header>
        <h1>Sponsoring</h1>
        <SponsoInfo>
          <h2>Sponsors ✨</h2>

          <p>GitStory isn't sponsored yet.</p>
          <p>
            If you like GitStory and find it useful please feel free to support me & the open source project through GitHub sponsors{" "}
            <a href="https://github.com/sponsors/swve" target="_blank" rel="noopener noreferrer">
              here
            </a>
          </p>
          <h2>Your Sponsorship 💓</h2>
          <p>
            Your sponsorship helps to maintain, improve, update and support GitStory and{" "}
            <a href="https://framestack.net" target="_blank" rel="noopener noreferrer">
              Framestack
            </a> and future incoming open source projects.
          </p>
        </SponsoInfo>
        <Footer></Footer>
      </GradientHeader>
    </>
  );
}

const SponsoInfo = styled.div`
  background-color: #171d21e6;
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  backdrop-filter: saturate(180%) blur(14px);

  padding: 50px;
  padding-top: 10px;
  width: fit-content;
  border-radius: 6px;
  overflow: clip;
  font-size: 14px;
  box-shadow: 0 9px 11px 2px rgb(3 8 19 / 20%);
  margin-top: 50px;

  top: -10px;
  position: relative;

  h2 {
    font-size: 30px;
  }

  h4 {
    font-size: 20px;
    font-weight: bolder;
  }

  a {
    font: bold;
    text-decoration: underline;
  }
`;

const GradientHeader = styled.div`
  height: 380px;
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  background: linear-gradient(180deg, #09090a 0%, rgba(39, 49, 55, 0.52) 100%),
    linear-gradient(228.87deg, rgba(69, 80, 174, 0.54) 9.05%, rgba(227, 9, 88, 0.27) 51.25%, rgba(255, 255, 255, 0) 84.11%),
    linear-gradient(243.33deg, #4c15eb 5.62%, #245aaa 36.13%, rgba(221, 50, 13, 0.71) 127.92%);

  h1 {
    padding-top: 20px;
    font-size: 45px;
  }

  // media query for mobile
  @media (max-width: 1500px) {
    height: 650px;
  }
`;
export default Privacy;
