import React, { Component } from "react";
import "./App.css";
import Status from "./components/Status";
import { Container, Box } from "@mui/material";

export default class App extends Component<
  {},
  { board: Array<string>; player: string; winner: string }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      player: "",
      winner: "",
    };
  }

  checkWinner() {
    let winBoxes = [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["0", "4", "8"],
      ["2", "4", "6"],
    ];

    for (let i = 0; i < winBoxes.length; i++) {
      const [a, b, c]: Array<any> = winBoxes[i];
      const board: Array<string> = this.state.board;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert("you've won!");
        this.setState({ winner: this.state.player });
      }
    }
  }

  handleClick = (index: number) => {
    if (this.state.player && !this.state.winner) {
      let newBoard: Array<string> = this.state.board;
      if (this.state.board[index] === null && !this.state.winner) {
        newBoard[index] = this.state.player;
        let newPlayer = this.state.player === "X" ? "O" : "X";
        this.setState({ board: newBoard, player: newPlayer });
        this.checkWinner();
      }
    }
  };

  setPlayer = (player: string) => {
    this.setState({ player });
  };

  handleReset() {
    this.setState({
      board: Array(9).fill(null),
      player: "",
      winner: "",
    });
  }

  render() {
    return (
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1>Tic Tac Toe</h1>
        <Status
          player={this.state.player}
          setPlayer={this.setPlayer}
          winner={this.state.winner}
        />
        <Box display="flex" flexDirection="row" flexWrap="wrap" width={"300px"}>
          {this.state.board.map((box: string, index: number) => {
            return (
              <Box
                display="flex"
                key={index}
                width={"80px"}
                height={"80px"}
                border="1px solid black"
                alignItems="center"
                justifyContent="center"
                lineHeight="80px"
                onClick={() => this.handleClick(index)}
              >
                {box}
              </Box>
            );
          })}
        </Box>
        <button
          disabled={!this.state.winner}
          onClick={() => this.handleReset()}
        >
          Reset
        </button>
      </Container>
    );
  }
}
