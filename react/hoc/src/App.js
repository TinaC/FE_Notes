import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    // subscribe to DataSource
    const CommentListWithSubscription = withSubscription(
      // the first parmeter is the wrapped component
      CommentList,
      // the second parameter retrieves the data we're insteseted in, given a DataSoure and the current props
      (DataSource) => DataSource.getComments()
    );

    const BlogPostWithSubscription = withSubscription(
      BlogPost,
      (DataSource, props) => DataSource.getBlogPost(props.id)
    );

    // This function takes a component...
    function withSubscription(WrappedComponent, selectData) {
      // ...and returns another component...
      return class extends React.Component {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          // pass a data prop with the most current data retrived from DataSource
          this.state = {
            data: selectData(DataSource, props)
          };
        }

        componentDidMount() {
          // ... that takes care of the subscription...
          DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
          DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
          this.setState({
            data: selectData(DataSource, this.props)
          });
        }

        render() {
          // ... and renders the wrapped component with the fresh data!
          // Notice that we pass through any additional props
          return <WrappedComponent data={this.state.data} {...this.props} />;
        }
      };
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
