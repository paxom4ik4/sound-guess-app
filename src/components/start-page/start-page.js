import React, { Component } from "react";
import "./start-page.css";
export default class StartPage extends Component {
  render() {
    return (
      <div className="start-page jumbotron">
        <h1 className="logo-txt">Sound Guess App</h1>
        <p>
          Glad to see you on the page of my application. You have to listen to
          sounds from different categories and guess what these sounds are.
          There are 6 categories in total (Nature, Public transport, Transport,
          Animals, Birds and Songs). They are all easy enough, but if necessary,
          you can turn on the console and see the current word. There is also a
          Training tab on the page. There you can view all the words as cards,
          listen to each and learn if you want. Good luck!
        </p>
        <button
          className="btn btn-primary"
          onClick={(e) => this.props.onStart(e)}
        >
          Start
        </button>
      </div>
    );
  }
}
