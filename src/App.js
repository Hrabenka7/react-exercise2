import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'
import './App.css';

class App extends Component {
  state = {
    input: ''
  }

  inputHandler = (event) => {
    this.setState({input: event.target.value})
  }

  removeCharHandler = (index) => {
    const text = this.state.input.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({input: updatedText})
  }


  render() {
      const charList = this.state.input.split('').map((char, index) => {
        return <CharComponent 
        character={char} 
        key={index}
        clicked={() => this.removeCharHandler(index)}/>;
      })



    return (
      <div>
        <div className="div-1">
          <p className="alert alert-warning"> React Exercise 2 [Udemy] </p>
          <h5>Instructions:</h5>
          <ol>
            <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
            <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
            <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
            <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
            <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
            <li>When you click a CharComponent, it should be removed from the entered text.</li>
          </ol>
          <hr/><hr/>
        </div>

        <div>
          <form>
            <label>Enter a word:</label>
            <input type="text" onChange={this.inputHandler} value={this.state.input}/>
          </form>
          <ValidationComponent inputLength = {this.state.input.length}/>
          <p>Your input: {this.state.input}</p>
          {charList}
        </div>
      </div>
    );
  }
}

export default App;

