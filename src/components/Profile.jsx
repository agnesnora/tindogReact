import DogList from "./DogList";

export default function Profile({ handleClear, dogsLiked }) {
  //   function getDogDetails() {
  //     console.log("details");
  //   }
  return (
    <div>
      {/* <div className="profile-info">
        <div className="profile-picture"></div>
        <div className="profile-hero">
          <h4>Cili, 26</h4>
          <p>Hungary, Miskolc</p>
        </div>
      </div> */}

      <h2>Dogs you liked</h2>
      <p>hover and click to know them better</p>
      <div className="dogList-container">
        <DogList dogsLiked={dogsLiked} />
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
