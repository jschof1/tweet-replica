import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <Message />
      <Author />
      Tweet
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return <div className="message">this tweet is less than 140 characters.</div>;
}

function Author() {
  return (
    <span className="author">
      <span className="name"> Jack Schofield </span>
      <span className="handle"> @jackschofield96 </span>
    </span>
  );
}

ReactDOM.render(<Tweet />, document.querySelector("#root"));
