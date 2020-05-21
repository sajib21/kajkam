import React, { useState } from "react";
import { connect } from "react-redux";
import { addBoard } from "../actions";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Thumbnails = styled.div`
  flex: 1;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background: grey;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: white;
  text-decoration: none;
`;

const CreateTitle = styled.h3`
  font-size: 48px;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

const CreateInput = styled.input`
  width: 400px;
  height: 80px;
  font-size: 22px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: none;
  outline-color: blue;
  box-shadow: 0 2px 4px grey;
  align-self: center;
`;

const Home = ({ boards, dispatch }) => {
  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = (e) => {
    setNewBoardTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
  };

  const renderAllBoards = () => {
    console.log("Home: Obj:", boards);
    console.log("Home: ara:", Object.entries(boards));
    return Object.entries(boards).map(([boardID, board]) => {
      return (
        <Link
          key={boardID}
          to={`/${boardID}`}
          style={{ textDecoration: "none" }}
        >
          <Thumbnail>
            <Title>{board.boardTitle}</Title>
          </Thumbnail>
        </Link>
      );
    });
  };

  const renderCreateNewBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <CreateTitle>Create new Board</CreateTitle>
        <CreateInput
          onChange={handleChange}
          value={newBoardTitle}
          placeholder={"Enter title here"}
          type="text"
        />
      </form>
    );
  };

  return (
    <HomeContainer>
      <Thumbnails>{renderAllBoards()}</Thumbnails>
      {renderCreateNewBoard()}
    </HomeContainer>
  );
};

const mapStateToProps = (state) => ({
  boards: state.boards,
});

export default connect(mapStateToProps)(Home);
