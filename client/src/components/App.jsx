import React, {Component} from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      petition: ''
    };

    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(event) {
    console.log(event.target);
  }

  render() {
    return (
      <div>
        <label htmlFor="petition">Petition Below</label>
        <br/>
        <input onChange={this.inputHandler} id="petition" type="text"/>
      </div>
    )
  }
}

export default App;

//Try to convert this to use redux later on.
//Also try to upload to amazon using docker.