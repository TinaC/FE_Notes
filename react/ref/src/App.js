import React, { Component } from 'react';
import FancyButton from './FancyButton';
import './App.css';

// const ref = React.createRef();

function handleClick() {
  console.log("click")
}

class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    // ref: intended for FancyButton, but actually be attached to the LogProps component
    // 使用了forwardRef后current变成了FancyButton
    console.log(this.textInput.current);
  }

  render() {
    return (
      <div className="App">
        <FancyButton
          label="Click Me"
          handleClick={handleClick}
          ref={this.textInput}
        />
      </div>
    );
  }
}

export default App;
