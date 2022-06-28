import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <LoadingBox>
      <CircularProgress style={{ color: "white" }} size={90} thickness={6} />
    </LoadingBox>
  );
}

const LoadingBox = styled.div`
  background-color: #171d21e6;
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  backdrop-filter: saturate(180%) blur(14px);
  padding: 10px;
  border-radius: 6px;
  overflow: clip;
  font-size: 14px;
  box-shadow: 0 9px 11px 2px rgb(3 8 19 / 20%);
  margin-top: 30px;
  position: relative;
  padding: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Loading;
