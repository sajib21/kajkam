import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>About Me</h1>
        <p style={{ color: "white" }}>
          I am Md Shahriar Hossain Sajib. Currently, working as a C/C++ Software
          Engineer in Samsung R&D Institute. I work in Tizen mobile application
          projects for Samsung Galaxy Watches.
        </p>
        <p style={{ color: "white" }}>
          To make this time of quarantine productive, I decided to learn web
          frameworks and make projects. I targeted ReactJS and NodeJS for this.
          This project "K A J K A M" is based on React and Redux, deployed on
          Github Pages. There is no backend, the data is stored in the user's
          browser's local storage. So if the local storage is cleared (for
          example by clearing cookies), the data will be gone.
        </p>
        <p style={{ color: "white" }}>
          To do this project, I took a lot help from the internet. I saw many
          tutorial videos. One of them was a series on cloning Trello app by a
          channel called "SelfDevTV". I followed the videos and also the many
          commits of the git repository.
        </p>
        <p style={{ color: "white" }}>
          There are no copyrights related to this project and you can use any of
          the source materials. Link of github repo is{" "}
          <a href="https://github.com/sajib21/kajkam">here</a>.
        </p>
        <br />
        <br />
        <h1 style={{ color: "white" }}>Contacts</h1>
        <p style={{ color: "white" }}>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/sajibcsedu/">
            https://www.linkedin.com/in/sajibcsedu/
          </a>
        </p>
        <p style={{ color: "white" }}>
          GitHub:{" "}
          <a href="https://github.com/sajib21">https://github.com/sajib21</a>
        </p>
        <p style={{ color: "white" }}>
          Email: <a href="shariarsajib@gmail.com">shariarsajib@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default About;
