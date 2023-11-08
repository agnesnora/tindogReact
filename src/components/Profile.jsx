// import DogList from "./DogList";
import { useState } from "react";

export default function Profile({ handleClear, myDogs, checkAgain }) {
  const [hoveredDogId, setHoveredDogId] = useState(null);
  function mouseEnter(e) {
    const detailedId = e.target.dataset.id;
    setHoveredDogId(detailedId);
  }

  function mouseLeave(e) {
    setHoveredDogId(null);
  }
  return (
    <div>
      <h2>Dogs you liked</h2>
      <p>hover and click to know them better</p>

      <div className="dogList-container">
        {myDogs.map((dog) => {
          return (
            <div
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className="dog-liked"
              key={dog.id}
              data-id={dog.id}
            >
              <img src={dog.avatar} data-id={dog.id} className="dog-img" />
              <div className="dog-text">
                <h3> {hoveredDogId == dog.id ? dog.name : null}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className="profile-footer">
        {" "}
        <button className="btn" onClick={handleClear}>
          Clear
        </button>
        <button className="btn" onClick={checkAgain}>
          Check again
        </button>
      </div>
    </div>
  );
}
