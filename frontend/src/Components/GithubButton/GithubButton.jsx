import React from "react";
import "./Style.css";

const GithubButton = () => {
  return (
    // <div className="github-btn-container">
    <div className="github-button">
      <button
        className="button"
        onClick={() =>
          window.open("https://www.instagram.com/safi.bro/", "_blank")
        }
      >
        <p className="title">Chat US:</p>
        <img src={require("../../Assets/likeemoji.png")} alt="like emoji" />
        <p className="description">Give Star</p>
      </button>
    </div>
    // </div>
  );
};

export default GithubButton;
