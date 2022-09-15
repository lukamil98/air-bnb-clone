import React from "react";
import { Navbar } from "components/Navbar";
import { Card } from "components/Card";
import { PLACES } from "mocks/data";

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />

        {PLACES.map((place) => (
          <Card place={place} key={place.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
