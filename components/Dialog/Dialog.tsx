import SignWithGitHub from "@components/Buttons/SignWithGitHub";
import React from "react";
import styled from "styled-components";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";

function Dialog(props) {
  return (
    <DialogArea visible={props.visible}>
      <DialogBox>
        <DialogTitle>You've reached the GitHub Public API limitation</DialogTitle>
        <p>GitStory uses the GitHub Public API which have a usage rate limitation for non-authenticated users, you've just reached that limit.</p>
        <p>Please consider sign in using your GitHub account to be able to continue using GitStory, or please wait for 1 hour.</p>
        <DialogActions>
          <Link href="/privacy">
            <a>Privacy Policy</a>
          </Link>{" "}
          <SignWithGitHub onclick={() => signIn()}></SignWithGitHub>
        </DialogActions>
      </DialogBox>
    </DialogArea>
  );
}

export default Dialog;

const DialogArea: any = styled.div`
  // center element in the middle of the screen
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #0000007e;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: ${(props: any) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow-y: auto;
  backdrop-filter: saturate(180%) blur(2px);
  transition: 0.7s;
`;

const DialogBox = styled.div`
  width: 551px;
  height: 260px;
  padding: 33px;
  transition: 0.7s;
  overflow-y: auto;
  background-color: #111417f4;
  backdrop-filter: saturate(180%) blur(32px);
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;


  @media (max-width: 768px) {
    width: 300px;
    height: 410px;
  }
  p {
    font-size: 14px;
    color: #ffffffad;
  }
`;
const DialogTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const DialogActions = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 30px;
  //center elements
  align-items: center;

  a {
    font-size: 9px;
    margin-right: 20px;
  }
`;

const DialogInfos = styled.div`
  font-size: 9px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
