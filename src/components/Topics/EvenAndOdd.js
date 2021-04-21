import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: '',
    }
  }

    handleChange(val) {
      this.setState( {userInput: val} );
    }

    assignEvenAndOdds(userInput) {
      let userArr = [];
      let evens = [];
      let odds = [];
      userArr = userInput.split(' ');
      let remLeadZero = userArr.map((e) => parseInt(e, 10) );
      remLeadZero.forEach((e) => e % 2 === 0 ? evens.push(e) : odds.push(e) );  //You cannot change the state directly. Must use setState method!!

      this.setState({evenArray: evens, oddArray: odds});

    }
  
  
  
  render() {
 
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input type="text" onChange={ (e) => this.handleChange(e.target.value) } className="inputLine"/>
        <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
        <span className="resultsBox">Evens: {this.state.evenArray.join(' ')}</span>
        <span className="resultsBox">Odds: {this.state.oddArray.join(' ')}</span>
      </div>
    )
  }
}