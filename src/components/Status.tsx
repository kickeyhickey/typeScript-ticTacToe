import React, { Component } from 'react'
import ChoosePlayer from './ChoosePlayer'

export default class Status extends Component<any> {

    renderWinner() {
        if (this.props.winner) {
           return <h2>Winner is {this.props.winner}</h2>
     } else {
       return this.props.player ? 
            <h2>Player {this.props.player}'s turn</h2> :
            <ChoosePlayer setPlayer={this.props.setPlayer}/>
     }
    }

  render() {
    return (
        <>
           <span>{this.renderWinner()}</span> 
        </>
    )
  }
}
