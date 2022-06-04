import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import React from "react";
import styled from "styled-components";

function Privacy() {
  return (
    <>
      <GradientHeader>
        <Header disable_api_usage_check title={`Privacy`}></Header>
        <h1>Privacy</h1>
        <PrivacyInfo>
          <h2>GitHub account</h2>
          <p>GitStory uses your account to generate a token on your behalf that is used to get data from the GitHub API </p>
          <p>
            GitStory Connect's only purpose is to generate a token to allow you to make requests on the GitHubAPI without limitations, the following permissions
            required are:
          </p>
          <ul>
            <li>
              Read only rights on "Contents"{" "}
              <a
                href="https://docs.github.com/en/rest/overview/permissions-required-for-github-apps#permission-on-contents"
                target="_blank"
                rel="noopener noreferrer"
              >
                (Learn more)
              </a>
            </li>
            <li>
              Read only rights on "Metadata"{" "}
              <a href="https://docs.github.com/v3/apps/permissions/#metadata-permissions" target="_blank" rel="noopener noreferrer">
                (Learn more)
              </a>
            </li>
          </ul>
          <p>
            Your private repositories are not accessible by GitStory Connect, only public repositories are supported{" "}
            <a href="https://github.com/swve/gitstorykit" target="_blank" rel="noopener noreferrer">
              (GitStoryKit)
            </a>
          </p>
          <h2>Analytics</h2>
          <p>We use Plausible Analytics, an alternative independent, minimal web analytics tool</p>
          <a href="https://plausible.io/privacy-focused-web-analytics">Plausible analytics</a>
          <h2>Data Collection </h2>
          <h4>GitHub Connect </h4>
          <p>
            No data is being collected, there is no backend for GitStory, the web app is an interface interacting directly with GitHub through the GitHubAPI
          </p>
          <h4>Personal data </h4>
          <p>
            No personal data are collected such as :
            <ul style={{ marginTop: 15 }}>
              <li> IP Adresses</li>
              <li> Individual data</li>
              <li> No cookies are used</li>
            </ul>
          </p>
          <p>You can explore the complete list of collected data points below :</p>
          <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer">
            Plausible Datapoints
          </a>
          <h4>All data is in aggregate only</h4>
          <h4>No tracking across devices</h4>
          <p>
            We do not track people across their devices. All the data is isolated to a single device only. There is no way to know whether the same person
            visits a site from more than one device.
          </p>
          <h4>No tracking across websites and apps</h4>
          <p>
            We do not track people across websites and apps that they visit. All the data is isolated to a single website only. There is no way to know what
            other websites someone visits
          </p>
          <h4>All data is isolated to a single day</h4>
          <p>All the data is isolated to a single day only. There is no way to know whether the same person comes back to a site on another day.</p>
          <h4>No cookies and other persistent identifiers</h4>
          <p>
            We do not generate any persistent identifiers either. We generate a random string of letters and numbers that is used to calculate unique visitors
            on a website and we reset this string once per day. This makes us compliant with the different cookie laws and privacy regulations such as GDPR and
            PECR. By not using cookies you do not need to obtain consent from the visitors to store and retrieve data from their devices. It’s one less thing to
            worry about and annoy your visitors with.
          </p>
          <h2>Hosting</h2>
          <h4>Analytics Server</h4>
          <p>
            GitStory Analytics server is hosted on a european server, This ensures that all analytics data is being covered by the European Union’s strict laws
            on data privacy
          </p>
          <h4>Analytics Server address </h4>
          <ul>
            <li>Hosting : Scaleway Elements (Online SAS - 8 rue de la Ville l’Evêque, 75008 Paris) </li>
            <li>Server : Amsterdam</li>
          </ul>
          <h4>Web Server</h4>
          <p>We use Vercel as a front-end platform to host & deploy GitStory</p>
        </PrivacyInfo>
        <Footer></Footer>
      </GradientHeader>
    </>
  );
}

const PrivacyInfo = styled.div`
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
    height: 1650px;
  }
`;
export default Privacy;
