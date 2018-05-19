import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Panel = props => {
  return <div>test panel</div>
}

const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const array = [];

const App2 = () => {
  return (
    <div>
      {array.length && <Button kind="primary" onClick={() => console.log("clicked!")}>
        This is valid HTML &amp; JSX at the same time  
        <Panel>
        </Panel>  
      </Button>}
    </div>
  );
};

ReactDOM.render(<App2 />, document.getElementById('root'));
registerServiceWorker();
