import React from "react";
import { Icon } from "@material-ui/core";
import styled from "styled-components";

const KKAddNewButton = ({ list, onClick }) => {
  const buttonText = list ? "Add another list" : "Add another card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

  const StyledAddNewButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    width: 300px;
    margin-left: 8px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: ${buttonTextOpacity};
    color: ${buttonTextColor};
    background-color: ${buttonTextBackground};
  `;

  return (
    <StyledAddNewButton onClick={onClick}>
      <Icon>add</Icon>
      <p style={{ flexShrink: 0 }}> {buttonText}</p>
    </StyledAddNewButton>
  );
};

export default KKAddNewButton;
