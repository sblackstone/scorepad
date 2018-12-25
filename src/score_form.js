import React, { Component } from 'react';
import './score_form.scss';


function capitalize(str) {
  try {
    return str.charAt(0).toUpperCase() + str.slice(1);    
  } catch(e) {
    return str;
  }
}

function ScoreOptions() {
  const opts = []
  for (let i = 1; i < 100; i++) {
    opts.push(<option key={i}>{i}</option>)
  }
  return(opts);  
}

class ScoreForm extends Component { 
  
  constructor(props) {
    super(props)
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  componentDidMount() {
    this.resetState();
  }

  resetState() {
    this.setState({
      name: "doug",
      score: 1,
      outcome: "knock",
      bonus: 0,
      total: 1
    });    
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const new_state = {
      [name]: value      
    }

    if (name === "outcome") {
      switch(value) {
      case "under_cut":
      case "gin":
        new_state["bonus"] = 25;
        break;
      case "big_gin":
        new_state["bonus"] = 31;
        break;
      default: 
        new_state["bonus"] = 0;
      }  
    }
    
    if (name === "score") {
      new_state["score"] = parseFloat(value);
    }
    
        
    this.setState(new_state, ()=> {
      this.setState((state, props) => ({
        total: state.score + state.bonus
      }));

    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({...this.state});
    this.resetState();
  }
  
  render(props) {
    return(
      <form className='ScoreForm' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Winner</label>
          <select className='form-control' name="name" value={this.state.name} onChange={this.handleChange}>
            <option value="doug">Doug</option>
            <option value="stephen">Stephen</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Score</label>
          <select className='form-control' name="score" value={this.state.score} onChange={this.handleChange}>
            <ScoreOptions />
          </select>
        </div>

        <div className='form-group'>
          <label>Outcome</label>
          <select className='form-control' name="outcome" onChange={this.handleChange} value={this.state.outcome}>
            <option value="knock">Knock</option>
            <option value="gin">Gin (+25pts)</option>
            <option value="big_gin">Big Gin (+31pts)</option>
            <option value="under_cut">Under Cut (+25pts)</option>
          </select>
        </div>
        <h5 className='text-center'>{capitalize(this.state.name)}'s Score</h5>
        <h5 className='text-center'>{this.state.total}</h5>
        <input type="submit" value="Save" className='btn btn-primary d-flex m-auto' />

      </form>
    )
  } 
}


export default ScoreForm;