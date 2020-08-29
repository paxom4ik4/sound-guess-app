import React, { Component } from "react";
import "./description.css";
import Player from "../player";

export default class Description extends Component {
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
    const { items, id } = this.props;
    const { isGuessed } = this.state;
    const content = (
      <div className="desc-info">
        <div className="desc-question-image">
          <img
            src={isGuessed ? items[id].imgSrc : "./constants/images/sound.svg"}
            alt="icon"
            className="desc-description-image"
          />
          <div className="description-player-container">
            <Player src={items[id].audSrc} />
          </div>
        </div>

        <div className="name-player-block">
          <div className="description-name">
            {isGuessed ? items[id].name : "***"}
          </div>
          <div className="desc">{items[id].desc}</div>
        </div>
      </div>
    );

    return (
      <div className="jumbotron description-block">
        {this.state.isGuessed ? (
          content
        ) : (
          <span>
            Listen to the sound and choose the correct answer from list
          </span>
        )}
      </div>
    );
  }
}
