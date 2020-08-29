import React, { Component } from "react";
import "./choose-answer-block.css";

export default class ChooseAnswer extends Component {
  render() {
    const { items } = this.props;
    const content = items.map((elem, id) => {
      const className =
        this.props.currentStage % 2 === 1
          ? "list-group-item"
          : "list-group-item default";
      return (
        <li
          className={className}
          key={id}
          id={id}
          onClick={(e) => {
            {
              this.props.isGuessed
                ? this.props.onItemClickCorrect(e)
                : this.props.onItemClick(e);
            }
          }}
        >
          <span className="indicator">
            <i className="far fa-dot-circle"></i>
          </span>
          {elem.name}
        </li>
      );
    });
    return (
      <div className="choose-answer-block jumbotron">
        <ul className="list-group">{content}</ul>
      </div>
    );
  }
}
