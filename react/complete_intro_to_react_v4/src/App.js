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
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(".");
          } else {
            breed = pet.breeds.breed;
          }

          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
