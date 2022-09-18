import React, { Component } from "react";

export default class ChoosePlayer extends Component<any> {
  handleForm = (e: any) => {
    e.preventDefault();
    this.props.setPlayer(e.target.player.value);
  };

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <label>
          Player X
          <input type="radio" name="player" value="X" />
        </label>
        <label>
          Player O
          <input type="radio" name="player" value="O" />
        </label>
        <input type="submit" value="start" />
      </form>
    );
  }
}
