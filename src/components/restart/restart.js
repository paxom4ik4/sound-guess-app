import React, { Component } from "react";

export default class Restart extends Component {
  render() {
    return (
      <button
        className="btn btn-success"
        onClick={() => this.props.onRestart()}
      >
        Restart The Game
      </button>
    );
  }
}
