import React, { Component } from 'react';

function logProps(WrappedComponent) {
  class LogProps extends Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // Assign the custom prop "forwardedRef" as a ref
      return <WrappedComponent ref={forwardedRef} {...this.props} />;
    }
  }

  // return LogProps;

  // React.forwardRef接受的参数是render function
  // Note the second param "ref" provided by React.forwardRef.
  // We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"
  // And it can then be attached to the Component.

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // Give this component a more helpful display name in DevTools.
  // e.g. "ForwardRef(logProps(MyComponent))"
  const name = Component.displayName || Component.name;
  console.log(Component.displayName);
  console.log(Component.name);
  forwardRef.displayName = `logProps(${name})`;
  return React.forwardRef(forwardRef);

  // return React.forwardRef(
  //   function myFunction(props, ref) {
  //     console.log("ref:")
  //     console.log(ref)
  //     // forwardedRef是一个regular prop, 用于传递ref
  //     return <LogProps {...props} forwardedRef={ref} />;
  //   })

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