import React, { Component } from 'react';
import './score_pad.scss';
import { Container, Row, Col } from 'reactstrap';
import PlayerScores from './player_scores';

function ScorePadHeader() {
  return (
    <div className="ScorePadHeader">
      <div className="align-items-center">      
        Header 
      </div>
    </Row>          
  )
}

function ScorePadNames() {
  return (
    <div className="d-flex flex-row ScorePadNames">
      <div className="stephen">Stephen</div>
      <div className="doug">Doug</div>
    </div>
  )
}


function ScorePadScores(props) {
  return (
        <div className='d-flex justify-content-between'>
          <div className='column'>
            <PlayerScores name="stephen" scores={props.scores.stephen} />
          </div>
          <div>
            <PlayerScores name="doug" scores={props.scores.doug} />    
          </div>
        </div>
  )
}


class ScorePad extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      scores: {
        doug: [
          { raw: 13, special: "gin",     bonus: 25, total: 25+13 },
          { raw: 16, special: "big_gin", bonus: 31, total: 31+16 },          
        ],
        stephen: [
          { raw: 14, special: "gin",     bonus: 25, total: 25+14 },
          { raw: 19, special: "big_gin", bonus: 31, total: 31+19 }, 
        ]
      }
    }
  }
  
  render() {
    return(
      <Container fluid="true">
        <ScorePadHeader />
        <ScorePadNames />
        <ScorePadScores scores={this.state.scores} />
      </Container>
    )
  }
  
}


export default ScorePad;