import React, { Component } from 'react';
import './score_pad.scss';
import { Container } from 'reactstrap';
import PlayerScores from './player_scores';
import ScoreForm from './score_form'

class ScorePad extends Component {
  
  constructor(props) {
    super(props);    
    this.state = {
      doug: [],
      stephen: []
    }
    
    
  }
  
  handleSubmit(new_rec) {
    const name = new_rec["name"];
    const other_name = new_rec["name"] === "stephen" ? "doug" : "stephen";
    
    this.setState({
        [name]:       [ ...this.state[name], new_rec  ],
        [other_name]: [ ...this.state[other_name], { score: 0, outcome: "Loss", bonus: 0, total: 0 } ]
    });
    
    console.log(new_rec);
  }
  
  render() {
    
    this.handleSubmit = this.handleSubmit.bind(this);

    return(
      <Container>
        <div className="d-flex flew-row">
          <div className="d-flex column p-3 flex-fill">
            <ScoreForm handleSubmit={this.handleSubmit} newRecord={this.newRecord} />
          </div>
          <div className="d-flex column p-3 flex-fill">
            <PlayerScores name="stephen" scores={this.state.stephen}/>
          </div>
          <div className="d-flex column p-3 flex-fill">
            <PlayerScores name="doug" scores={this.state.doug} />
          </div>
        </div>
      </Container>
    )
  }  
}


export default ScorePad;