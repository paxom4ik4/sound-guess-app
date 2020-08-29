import React, { Component } from "react";
import "./current-question-block.css";
import Player from "../player";

export default class CurrentQuestion extends Component {
  state = {
    isGuessed: this.props.isGuessed,
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.isGuessed === false && nextProps.isGuessed === true) {
    }
    return {
      isGuessed: nextProps.isGuessed,
    };
  }
  render() {
    const { isGuessed } = this.state;
    const { imgSrc, audioSrc } = this.props;
    return (
      <div className="quesion-card jumbotron">
        <div className="question-image-container">
          {isGuessed ? (
            <img src={imgSrc} alt="icon" className="quesion-image" />
          ) : (
            <div className="guess-icon">Guess The Sound</div>
          )}
          <div className="quesion-name">
            {isGuessed ? this.props.name : "***"}
          </div>
        </div>

        <div className="name-player-block">
          <div className="player-container">
            <Player src={audioSrc} />
          </div>
        </div>
      </div>
    );
  }
}
