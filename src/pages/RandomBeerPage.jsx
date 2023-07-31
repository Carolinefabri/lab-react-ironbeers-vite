import axios from "axios";
import { useState, useEffect } from "react";
import styled from '@emotion/styled'

function RandomBeerPage() {
  const [rdmBeer, setBeer] = useState(null);

  const BeerCard = styled.div`
  margin : 50px 15vw;
  padding : 20px ;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  display : flex;
  flex-direction : column;
  img{
    width : 150px;
    margin : auto;
  } `

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        const nbOfBeers = response.data.length;
        const rdmBeerNb = Math.floor(Math.random() * nbOfBeers);
        setBeer(response.data[rdmBeerNb]);
      })
      .catch((err) => console.log("Error occurred", err));
  }, []);

  if (!rdmBeer) return "Loading...";

  return (
    <div>
      <BeerCard>
        <img src={rdmBeer.image_url} alt="beer img" />
        <h2>{rdmBeer.name}</h2>
        <h3>{rdmBeer.tagline}</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <p><strong>Attenuation Level:</strong> {rdmBeer.attenuation_level}</p>
              </td>
              <td>
                <p><strong>First Brewed:</strong> {rdmBeer.first_brewed}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>{rdmBeer.description}</p>
        <h4>Contributed by: {rdmBeer.contributed_by}</h4>
      </BeerCard>
    </div>
  );
}

export default RandomBeerPage;