import React from "react";
import styled from "styled-components";

function Loading() {
  return <LoadingBox></LoadingBox>;
}

const LoadingBox = styled.div`
  background-color: #171d21e6;
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  backdrop-filter: saturate(180%) blur(14px);
  padding: 10px;
  width: fit-content;
  border-radius: 6px;
  overflow: clip;
  font-size: 14px;
  box-shadow: 0 9px 11px 2px rgb(3 8 19 / 20%);

  width: 120%;
  top: -200px;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`;

export default Loading;
