import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Square is a React component class, or React component type.
// A component takes in parameters, called props, and returns a hierarchy of views to display via the render method.
class Square extends React.Component {
    // state都挪到parent去了
    // constructor(props) {
    //     // es6 class的要求
    //     super(props);
    //     // this.state should be considered private to the component. 
    //     // 这时state是属于每个Square的
    //     // component state is considered private, we can’t update Board’s state directly from Square.
    //     // 不能通过Square直接更新Board的state
    //     this.state = {
    //         value: null,
    //     }
    // }

    // The render method returns a description of what you want to render, and then React takes that description and renders it to the screen.
    // render returns a React element
    render() {
      return (
        // 这里用的html, 也可以用JSX
        // 传递给onClick prop 的是一个函数，如果是onClick={alert('click')} 会立即执行，为啥？onClick又没被触发？  onClick={() => alert('click')} 是对的
        // this.setState({value: 'X'} 被替换，使用parent的props function 
        <button className="square" onClick={() => this.props.onClick()}>      
          {this.props.value}
        </button>
      );
    }
  }
  
  // the Board component can tell each Square what to display, like how we made each square display its index earlier. 由parent component来控制state, 便于保证children状态同步
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        square: Array(9).fill(null),
      }
    }

    renderSquare(i) {
      // pass a value prop i to the Square
      // onClick需要在 Board 定义，是因为需要传递 Board 的 prop
      return ( // 加个括号防止js在后面插入分号
        <Square
          // passing down two props (value & onClick) from Board to Square
          value={this.state.squares[i]}
          // conventional in React apps to use on* names for the attributes and handle* for the handler methods.
          onClick={() => this.handleClick(i)}
        />
      );
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
  