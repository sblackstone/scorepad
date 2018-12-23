import React, { Component } from 'react';
import './player_scores.scss';
import { Container, Row, Col } from 'reactstrap';


class PlayerScores extends Component {
    
  render() {
    return(
      <table className='table'>
        <thead>
          <tr>
            <th>Round</th>
            <th>Score</th>
            <th>Special</th>
            <th>Bonus</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    )
  }
  
}


export default PlayerScores;