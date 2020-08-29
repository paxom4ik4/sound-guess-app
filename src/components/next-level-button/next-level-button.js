import React, { Component } from "react";
import "./next-level-button.css";

export default class NextLevelButton extends Component {
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
    const { nextLevel } = this.props;
    const label = this.props.lvl === 5 ? "Finish the game" : "Next Level";
    return (
      <button
        type="button"
        className="btn btn-success"
        disabled={!this.state.isGuessed}
        onClick={nextLevel}
      >
        {label}
      </button>
    );
  }
}
