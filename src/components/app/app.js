import React, { Component } from "react";
import "./app.css";
import Header from "../header";
import QuestionBlock from "../current-question-block";
import {
  PublicTransport,
  Transport,
  Nature,
  Animals,
  Birds,
  Songs,
} from "../constants";
import ChooseAnswer from "../choose-answer-block";
import Description from "../description";
import NextLevelButton from "../next-level-button";
import Finish from "../finish-game";
import Training from "../training-mode";

export default class App extends Component {
  state = {
    trainingMode: false,
    dataStage: 0,
    currentStage: 0,
    maxScore: 5,
    score: 0,
    isGuessed: false,
    targetId: 0,
    data: Nature,
    currentQuestion: "null",
    isFinished: false,
  };
  componentDidMount() {
    this.setState((state) => {
      return {
        currentQuestion: state.data[this.randomItem()],
      };
    });
  }
  randomItem() {
    return Math.floor(Math.random() * 5);
  }

  setData = () => {
    switch (this.state.dataStage) {
      case 1: {
        console.log("lol");
        this.setState((state) => {
          return {
            data: (state.data = PublicTransport),
          };
        });
        break;
      }
      case 2: {
        console.log("lol");
        this.setState((state) => {
          return {
            data: (state.data = Transport),
          };
        });
        break;
      }
      case 3: {
        console.log("lol");
        this.setState((state) => {
          return {
            data: (state.data = Animals),
          };
        });
        break;
      }
      case 4: {
        console.log("lol");
        this.setState((state) => {
          return {
            data: (state.data = Birds),
          };
        });
        break;
      }
      case 5: {
        console.log("lol");
        this.setState((state) => {
          return {
            data: (state.data = Songs),
          };
        });
        break;
      }
      default: {
        this.setState((state) => {
          return {
            isFinished: (state.isFinished = true),
          };
        });
        this.setState((state) => {
          return {
            data: (state.data = Nature),
          };
        });
        break;
      }
    }
  };
  nextPropStage = () => {
    console.log(this.state.data);
    this.setState((state) => {
      return {
        currentStage: state.currentStage + 1,
        maxScore: 5,
        score: state.score,
        isGuessed: false,
        currentQuestion: this.state.data[this.randomItem()],
        targetId: 0,
      };
    });
  };
  nextStage = () => {
    this.setData();
    this.nextPropStage();
  };

  checkAnswer = (e) => {
    e.persist();
    const target = e.target;
    const targetName = target.textContent;
    const targetId = target.getAttribute("id");

    this.setState({
      targetId: targetId,
    });

    if (targetName === this.state.currentQuestion.name) {
      target.className += " right";
      this.setState((state) => {
        return {
          dataStage: state.dataStage + 1,
          isGuessed: true,
          score: this.state.score + this.state.maxScore,
        };
      });
    } else {
      this.setState((state) => {
        return {
          maxScore: state.maxScore - 1,
        };
      });
      target.className += " wrong";
    }
  };

  checkAnswerCorrect = (e) => {
    const target = e.target;
    const targetId = target.getAttribute("id");
    this.setState({
      targetId: targetId,
    });
  };

  onRestart = () => {
    this.setState((state) => {
      return {
        dataStage: 0,
        currentStage: 0,
        maxScore: 5,
        score: 0,
        isGuessed: false,
        targetId: 0,
        data: Nature,
        currentQuestion: state.data[this.randomItem()],
        isFinished: false,
      };
    });
  };

  onTraining = () => {
    this.setState({
      trainingMode: true,
    });
  };
  onGame = () => {
    this.setState({
      trainingMode: false,
    });
  };
  onClose = () => {
    this.setState({
      trainingMode: false,
    });
  };
  render() {
    console.log("next stage 2");
    console.log(this.state.data[0].audSrc);
    const { name, imgSrc, audSrc } = this.state.currentQuestion;
    const { isGuessed, score, data } = this.state;
    const chooseAnswer = (
      <React.Fragment>
        <div className="choose-answer">
          <ChooseAnswer
            isGuessed={isGuessed}
            items={data}
            onItemClick={this.checkAnswer}
            onItemClickCorrect={this.checkAnswerCorrect}
            currentStage={this.state.currentStage}
          />
          <Description
            items={data}
            id={this.state.targetId}
            isGuessed={this.state.isGuessed}
          />
        </div>
      </React.Fragment>
    );

    const mainContent = (
      <React.Fragment>
        <Header score={score} currentStage={this.state.currentStage} />
        <div className="navbar mode-switch">
          <button className="btn btn-success" onClick={this.onGame}>
            Game
          </button>
          <button className="btn btn-success" onClick={this.onTraining}>
            Training
          </button>
        </div>
        <QuestionBlock
          imgSrc={imgSrc}
          audioSrc={audSrc}
          name={name}
          isGuessed={isGuessed}
        />
        {chooseAnswer}
        <NextLevelButton
          isGuessed={isGuessed}
          nextLevel={this.nextStage}
          lvl={this.state.currentStage}
        />
      </React.Fragment>
    );
    const content = (
      <React.Fragment>
        {this.state.isFinished ? (
          <Finish score={this.state.score} onRestart={this.onRestart} />
        ) : (
          mainContent
        )}
      </React.Fragment>
    );
    const display = this.state.trainingMode ? (
      <Training onClose={this.onClose} />
    ) : (
      content
    );
    return display;
  }
}
