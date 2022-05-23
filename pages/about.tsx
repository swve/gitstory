import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SensorsIcon from "@mui/icons-material/Sensors";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

function About() {
  return (
    <>
      <GradientHeader>
        <Header disable_api_usage_check title={`About`}></Header>
        <AboutWrapper>
          <img src="/img/index_logo.png" height="40" /> <h1>Go back in time and explore your favorite git projects !</h1>
          <AboutElements>
            <Element>
              <CalendarMonthIcon sx={{ marginRight: 1, fontSize: 75 }} />
              <p>Explore your favorite projects by going back in time using the reactive calendar</p>
            </Element>
            <Element>
              <GitHubIcon sx={{ marginRight: 1, fontSize: 75 }} />
              <p>See the list of commits by day/month/year</p>
            </Element>
            <Element>
              <SensorsIcon sx={{ marginRight: 1, fontSize: 75 }} />
              <p>Scan for commits activity of a given month by clicking on the month button in the calendar</p>
            </Element>
            <Element>
              <AccessTimeFilledIcon sx={{ marginRight: 1, fontSize: 75 }} />
              <p>Explore "snapshots" of GitHub repositories by navigating to the exact tree of a commit </p>
            </Element>
          </AboutElements>
          <MadeBy>
            <p>
              Made with{" "}
              <span role="img" aria-label="heart">
                💜
              </span>{" "}
              by <img src="/img/sweave.png" height="12" alt="" />
            </p>
          </MadeBy>
          
        </AboutWrapper>
      </GradientHeader>
      <Footer></Footer>
    </>
  );
}

const GMDProjects = styled.div`
  //background: linear-gradient(121.34deg, rgb(170, 7, 210) 5.09%, rgba(114, 3, 255, 0.88) 77.99%);
  margin-top: 90px;
  padding: 10px;
  letter-spacing: 16px;
  // align image and text horizontally
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  color: white;
  font-size: 12px;
  font-family: "Inter";
  font-weight: 800;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 13px;
  text-transform: uppercase;

  img {
    margin-top: 0px !important;
    margin-right: 16px;
  }
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

const Element = styled.div`
  justify-content: center;
  margin: auto;
  margin-bottom: 20px;
  width: 240px;
  p {
    font-size: 15px;
  }
  svg {
    padding: 20px;
    background-color: #22222db8;
    border-radius: 120px;
  }
`;

const AboutElements = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  margin-left: 120px;
  margin-right: 120px;
  flex-wrap: wrap;
`;

const AboutWrapper = styled.div`
  text-align: center;

  img {
    margin-top: 140px;
  }

  h1 {
    margin-top: 0px;
    width: 600px;
    margin: auto;
    padding-top: 20px;
    font-size: 45px;
    line-height: 46px;
    letter-spacing: -2px;
  }
`;

const GradientHeader = styled.div`
  height: 820px;
  padding-left: 130px;
  padding-right: 130px;
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
