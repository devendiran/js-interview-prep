import { useEffect, useState } from "react";
import "./styles.css";
import useApi from "./useApi";
import Breed from "./Breed";
import BreedImage from "./BreedImage";

// https://dog.ceo/api/breeds/list/all

// Image by breed:
// https://dog.ceo/api/breed/hound/images
//1. Create a react custom reusable hook to make an api call, hook will return you three states (loading, error, data)
// 2. Make an API call to display all the breeds with a checkbox next to each.
// 3. On selecting diff checkbox and hit submit display one image for each selected breed
// 4. Create one select all, to select all the breeds.
export default function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectAllBreeds, setSelectAllBreeds] = useState(false);
  const [showSelectedImages, setShowSelectedImages] = useState(false);

  const [loading, response, error] = useApi(
    "https://dog.ceo/api/breeds/list/all"
  );

  const onBreedSelected = (breadName, isSelected) => {
    setBreeds((preState) => preState.map((breed) => (breed.name === breadName) ? { ...breed, isSelected } : breed));
  };

  const onSelectAll = () => {
    setSelectAllBreeds((prevState) => {
      setBreeds((breeds) => {
        return breeds.map(breed => {
          return {...breed, isSelected:!prevState}
        });
      });
      return !prevState;
    });
  };


  useEffect(() => {
    if (response) {
      const breeds = Object.keys(response.message).map((breed) => {
        return {
          name: breed,
          isSelected: false
        };
      });
      setBreeds(breeds);
    }
  }, [response]);

  const selectedBreeds = breeds.filter(breed => breed.isSelected);
  
  if (!showSelectedImages) {
    const breedList = breeds.map((breed) => {
      return <Breed breed={breed} key={breed.name} onBreedSelected={onBreedSelected}/>;
    });

    return (
      <div className="App">
        <div className="header">
          <div>
            <input type="checkbox" onChange={onSelectAll} checked={selectAllBreeds}/>
            <label>Select All</label>
          </div>

          <div>
             <button type="button" onClick={() => setShowSelectedImages(true)} disabled={!selectedBreeds.length}>
              Load Images
            </button>
          </div>

        </div>

        <ul className="breeds">
          {breedList}
        </ul>
      </div>
    );
  }

  const breedImages = selectedBreeds.map((breed) => {
    return (
      <li key={breed.name}>
        <BreedImage
          breed={breed}
          showImage={showSelectedImages}
        />
      </li>
    );
  });
  return (
    <div className="App">
      <button type="button" onClick={() => setShowSelectedImages(false)}>
        Back
      </button>
      <ul className="breeds">{breedImages}</ul>
    </div>
  );
}
