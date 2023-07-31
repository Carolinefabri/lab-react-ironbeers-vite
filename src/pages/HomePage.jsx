import React from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import "../App.css";

function HomePage() {
  return (
    <div className="container">
      {/* All Beers */}
      <Link to="/beers" className="link">
        <div className="img-container">
          <img src={beersImg} alt="beer img" />
        </div>
        <h2>All Beers</h2>
        <p>
          This section displays a list of all the beers available. Each beer is
          accompanied by an image, name, and a short tagline. Users can click
          on a beer to view its details on the dedicated Beer Details page.
        </p>
      </Link>
      {/* Random Beer */}
      <Link to="/random-beer" className="link">
        <div className="img-container">
          <img src={randomBeerImg} alt="beer img" />
        </div>
        <h2>Random Beer</h2>
        <p>
          This section shows a randomly selected beer from the collection. The
          displayed beer's details include an image, name, and tagline. Users
          can click on the beer to view its complete information on the Beer
          Details page.
        </p>
      </Link>
      {/* New Beer */}
      <Link to="/new-beer" className="link">
        <div class="teste">
        <div className="img-container">
          <img src={newBeerImg} alt="beer img" />
        </div>
        <h2>New Beer</h2>
        <p>
          In this section, users can create a new beer. When they click on the
          "New Beer" link, they will be taken to a page where they can fill out
          a form to add a new beer to the database. Upon successful submission,
          a message will be displayed confirming that the new beer has been
          added to the database.
        </p></div>
      </Link>
      
    </div>
  );
}

export default HomePage;