import React, { Component } from 'react';

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

class FancyButton extends Component {
  focus() {

  }

  render() {
    return (
      <button className="FancyButton">
        {this.props.children}
      </button>
    )
  }
}

export default logProps(FancyButton);