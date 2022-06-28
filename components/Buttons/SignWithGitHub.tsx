import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import CircularProgress from "@mui/material/CircularProgress";

function SignWithGitHub(props) {
  if (props.withLoading) {
    return (
      <BtnSignInWithGitHub onClick={props.onclick}>
        <CircularProgress style={{ color: "white" }} size={15} thickness={6} />
      </BtnSignInWithGitHub>
    );
  } else {
    return (
      <BtnSignInWithGitHub onClick={props.onclick}>
        <GitHubIcon sx={{ marginRight: 1, fontSize: 15 }} />
        Sign in with GitHub
      </BtnSignInWithGitHub>
    );
  }
}

export default SignWithGitHub;

const BtnSignInWithGitHub = styled.button`
  background-color: #22222d;
  color: white;
  font-size: 12px;
  font-family: "Inter";
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.2px;
  border: solid 1px;
  border-color: #ffffff0d;
  border-radius: 8px;
  padding: 12px;

  svg {
    display: inline-block;
    vertical-align: middle;
  }
`;
