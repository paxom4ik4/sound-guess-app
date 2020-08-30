import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  state = {
    score: this.props.score,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.score !== nextProps.score) {
    }
    return {
      score: nextProps.score,
    };
  }

  componentDidUpdate() {
    const items = document.querySelectorAll(".page-item");
    items.forEach((elem) => {
      elem.classList.remove("active");
    });
    items[this.props.currentStage].classList.add("active");
  }
  render() {
    const { score } = this.state;
    const content = (
      <React.Fragment>
        <header className="navbar header">
          <span>
            <span className="header-g">S</span>ound
            <span className="header-g">G</span>uess
          </span>
          <span>
            Score: <span className="header-g">{score}</span>
          </span>
        </header>
        <ul className="pagination">
          <li className="page-item active">
            <a className="page-link" href="#">
              Nature
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Public Transport
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Transport
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Animals
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Birds
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Songs
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
    return content;
  }
}
