import React, { Component } from "react";
import Restart from "../restart";
import "./finish-game.css";
export default class Finish extends Component {
  render() {
    const congrat = (
      <div className="certificate-container">
        <img
          className="certificate-img"
          src="../constants/certificate.png"
          alt="picture"
        />
      </div>
    );
    return (
      <div className="finish jumbotron">
        <div className="finish-header">
          <p className="finish-end"> The End! </p>
          <p className="finish-score">
            You scored {this.props.score} points out of 30!
          </p>
        </div>
        <div className="finish-congratulation">
          {this.props.score === 30 ? (
            congrat
          ) : (
            <p className="one-more-txt">
              Try one more time and reach the maximum result to see
              congratulations
            </p>
          )}
        </div>
        <Restart onRestart={this.props.onRestart} />
      </div>
    );
  }
}
