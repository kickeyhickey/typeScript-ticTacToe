import React, { Component } from 'react'
import './App.css'

export default class App extends Component<{}, {board: any}> {
  constructor(props: any) {
    super(props)
    this.state = {
      board: Array(9).fill("X")
    }
  }

  render() {
    return (
      <div className='container'>
        <h1>Tic Tac Toe</h1>
        <div className='board'>
          {this.state.board.map((box:any) => {
            return (
              <div className='box'>{box}</div>
            )
          })}
        </div>
      </div>
    )
  }
}
