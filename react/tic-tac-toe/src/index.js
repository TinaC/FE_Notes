import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square is a React component class, or React component type.
// A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.
class Square extends React.Component {
    constructor(props) {
        // es6 class的要求
        super(props);
        // this.state should be considered private to the component. 
        // 这时state是属于每个Square的
        this.state = {
            value: null,
        }
    }

    // The render method returns a description of what you want to render, and then React takes that description and renders it to the screen.
    // render returns a React element
    render() {
      return (
        // 这里用的html, 也可以用JSX
        // 传递给onClick prop 的是一个函数，如果是onClick={alert('click')} 会立即执行，为啥？onClick又没被触发？  onClick={() => alert('click')} 是对的
        <button className="square" onClick={() => this.setState({value: 'X'})}>      
            {this.state.value
            /* {this.props.value} */}
        </button>
      );
    }
  }
  
  // the Board component can tell each Square what to display, like how we made each square display its index earlier. 由parent component来控制state, 便于保证children状态同步
  class Board extends React.Component {
    renderSquare(i) {
        // pass a value prop to the Square
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  