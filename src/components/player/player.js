import React, { Component } from "react";
import "./player.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default class Player extends Component {
  state = {
    isGuessed: this.props.isGuessed,
  };
  render() {
    console.log(!this.state.isGuessed);
    const { src } = this.props;
    return (
      <AudioPlayer
        playing={!this.state.isGuessed}
        stop={true}
        src={src}
        showSkipControls={false}
        showJumpControls={false}
        autoPlayAfterSrcChange={false}
        customControlsSection={[
          RHAP_UI.VOLUME_CONTROLS,
          RHAP_UI.ADDITIONAL_CONTROLS,
          RHAP_UI.MAIN_CONTROLS,
        ]}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        customAdditionalControls={[]}
        layout="horizontal-reverse"
      />
    );
  }
}
