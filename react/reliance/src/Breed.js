import "./styles.css";
//https://github.com/facebook/react/issues/13635
export default function Breed({ breed, onBreedSelected }) {
  return (
    <li className="breed">
      <div>
        <input type="checkbox" value={breed.name} checked={breed.isSelected} onChange={(event) => onBreedSelected(breed.name, event.target.checked)}/>
        {breed.name}
      </div>
    </li>
  );
}
