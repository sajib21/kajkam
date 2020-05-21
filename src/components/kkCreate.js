import React, { Component } from "react";
import { connect } from "react-redux";
import KKForm from "./kkForm";
import KKButton from "./kkButton";
import KKAddNewButton from "./kkAddNewButton";
import { addList, addCard } from "../actions";

class KKCreate extends Component {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = (e) => {
    this.setState({ formOpen: false, text: "" });
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({ text: "" });
      dispatch(addList(text));
    }
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    if (text) {
      this.setState({ text: "" });
      dispatch(addCard(listID, text));
    }
  };

  render() {
    const { text, formOpen } = this.state;
    const { list } = this.props;

    if (formOpen)
      return (
        <KKForm
          text={text}
          onChange={this.handleInputChange}
          closeForm={this.closeForm}
        >
          <KKButton
            text={list ? "Add List" : "Add Card"}
            onClick={list ? this.handleAddList : this.handleAddCard}
          ></KKButton>
        </KKForm>
      );
    else return <KKAddNewButton list={list} onClick={this.openForm} />;
  }
}

export default connect()(KKCreate);
