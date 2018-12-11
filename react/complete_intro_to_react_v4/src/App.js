import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

// under imports
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  // inside class, at top
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  // inside class, above render
  componentDidMount() {
    petfinder.pet
      .find({ location: "Seattle, WA", output: "full" })
      .then(data => {
        let pets;
        // if exist
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            // multiple pet
            pets = data.petfinder.pets.pet;
          } else {
            // just one animal
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
