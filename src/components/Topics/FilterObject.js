import React, {Component} from 'react';

export default class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO'
        }
      ],
      
      userInput: '',
      filteredEmployees: [],
    }
  }

  render() {
    return (
      <div className="PuzzleBox filterObjPB">
        <h4>Filter Object</h4>
        <span className="puzzleText"></span>
        <input type="text" className="inputLine"/>
        <button className="confirmationButto">Filter</button>
        <span className="resultsBox filterObjRB"></span>
      </div>
    )
  }
}