import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author /> <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
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

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
  message: "tweet cannot be over 140 charecters",
  gravatar: "xyz",
  author: {
    handle: "Jack Schofield",
    name: "@jackSchofield"
  },
  likes: 2,
  retweets: 0,
  timestamp: "1-03-2021 19:10:11"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
