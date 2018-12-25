import React, { Component } from 'react';
import './player_scores.scss';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function PlayerName(props) {
  return (
    <h5 className='text-center'>{capitalize(props.name)}</h5>
  )
}


class Outcome extends Component {
  constructor(props) {
    super(props);    
    this.values = { "gin": "Gin",
                    "loss": "Loss",
                    "knock": "Knocked",
                    "big_gin": "Big Gin",
                    "under_cut": "Under Cut",
                    "": ""
    };
  }

  render() {
    return this.values[this.props.outcome];
  }
  
}


class ScoreRows extends Component {
  

  render() {
    this.total = 0;
    return this.props.scores.map((score,i) => {
      this.total += score.total;
      return (
        <tr key={i}>
          <td className="text-center">{i+1}</td>
          <td className="text-center">{score.score}</td>
          <td className="text-center"><Outcome outcome={score.outcome} /></td>
          <td className="text-center">{score.bonus}</td>
          <td className="text-center">{score.total}</td>
          <td className="text-center">{this.total}</td>
        </tr>
      )
    });    
  }
}



function PlayerScores(props) {
  return (
    <div className="ScoresTable">
      <PlayerName name={props.name} />
      <table className='table table-striped table-responsive'>
        <thead>
          <tr>
            <th className="text-center">Round</th>
            <th className="text-left">Score</th>
            <th className="text-center">Outcome</th>
            <th className="text-center">Bonus</th>
            <th className="text-center">Round</th>
            <th className="text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <ScoreRows scores={props.scores} />
        </tbody>
      </table>    
    </div>
  )
}


export default PlayerScores;