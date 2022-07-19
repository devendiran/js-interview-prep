import useApi from "./useApi";

export default function BreedImage({ breed }) {
  const [loading, response, error] = useApi(
    `https://dog.ceo/api/breed/${breed.name}/images`
  );
  if (loading) {
    return <div> Image is Loading...</div>;
  }
  if (error) {
    return <div> Sorry unable to load Image...</div>;
  }

  return (
    <>
      {response && breed.isSelected && (
        <img src={response.message[0]} alt="Format not match" />
      )}
    </>
  );
}
