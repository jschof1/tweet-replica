import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
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
ReactDOM.render(<Tweet />, document.querySelector("#root"));
