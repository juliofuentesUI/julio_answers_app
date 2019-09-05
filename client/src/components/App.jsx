import React, {Component} from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      petition: '',
      question: '',
      hiddenText: false,
      fakePetition: 'Alfie, please answer the following question :',
      currentFakeIndex: 0
    };

    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    const { hiddenText, fakePetition, currentFakeIndex, petition } = this.state;

    if (hiddenText === true) {
      this.setState({
        petition: petition + fakePetition[currentFakeIndex],
        currentFakeIndex: currentFakeIndex + 1
      });
      return;
    } 

    console.log('am i running even after true');

    if (event.target.value === '.' && hiddenText === false) {
      //Change state to hidden text.
      //Grab existing text or...what..
      let currentString = petition + fakePetition[currentFakeIndex];
      event.target.value = currentString;
      //You have to change the value being viewed right there and then,
      //then the state gets updated later asynchronously.
      this.setState({
        hiddenText: true,
        petition: currentString,
        currentFakeIndex: currentFakeIndex + 1
      });
    };

    if (hiddenText === false) {
      this.setState({
        petition: event.target.value
      });
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="petition">Petition Below</label>
        <br/>
        <input onChange={this.inputHandler} value={this.state.petition} placeholder="Petition" id="petition" type="text"/>
        <br/>
        <label htmlFor="question">Question:</label>
        <br/>
        <input id="question" type="text"/>
      </div>
    )
  }
}

export default App;

//Try to convert this to use redux later on.
//Also try to upload to amazon using docker.