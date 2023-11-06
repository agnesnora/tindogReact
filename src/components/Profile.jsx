import DogList from "./DogList";

export default function Profile({ handleClear, dogsLiked }) {
  return (
    <div>
      <h2>Dogs you liked</h2>
      <p>hover and click to know them better</p>
      <div className="dogList-container">
        <DogList dogsLiked={dogsLiked} />
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
