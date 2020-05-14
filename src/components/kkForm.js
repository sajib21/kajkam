import React from "react";
import styled from "styled-components";
import { Card, Button, Icon } from "@material-ui/core";
import Textarea from "react-textarea-autosize";

const KKForm = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    const Container = styled.div`
      width: ${list ? "300px" : "100%"};
      margin-bottom: 8px;
    `;

    const StyledCard = styled(Card)`
      min-height: 85px;
      padding: 6px 8px 2px;
    `;

    const StyledTextarea = styled(Textarea)`
      resize: none;
      width: 100%;
      overflow: hidden;
      outline: none;
      border: none;
    `;

    const ButtonContainer = styled.div`
      margin-top: 8px;
      display: flex;
      align-items: center;
      margin-left: 8px;
    `;

    const StyledIcon = styled(Icon)`
      margin-left: 8px;
      cursor: pointer;
    `;

    return (
      <Container>
        <StyledCard>
          <StyledTextarea
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={(e) => onChange(e)}
          />
        </StyledCard>
        <ButtonContainer>
          {children}
          <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
        </ButtonContainer>
      </Container>
    );
  }
);

export default KKForm;
