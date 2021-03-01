import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author author={tweet.author} /> <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
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

function Avatar({ hash }) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name"> {name}</span>
      <span className="handle"> {handle} </span>
    </span>
  );
}

const Time = ({ time }) => <span className="time">{time}</span>;

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
