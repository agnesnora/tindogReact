// import DogList from "./DogList";
import { useState } from "react";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import PopUp from "./PopUp";

export default function Profile({ handleClear, myDogs, checkAgain }) {
  const [hoveredDogId, setHoveredDogId] = useState(null);
  const [popUpOn, setPopUpOn] = useState(false);
  const [toDog, setToDog] = useState("");
  function mouseEnter(e) {
    const detailedId = e.target.dataset.id;
    setHoveredDogId(detailedId);
  }

  function mouseLeave(e) {
    setHoveredDogId(null);
  }

  function sendMessage(id) {
    setToDog(myDogs.filter((item) => item.id == id)[0]);
    setPopUpOn(true);
  }

  if (myDogs.length == 0) {
    return (
      <>
        <h3>You have no dogs saved in your profile</h3>
        <p>to see the dogs in your area click on the paw icon</p>
      </>
    );
  }

  return (
    <div>
      <h2>Dogs you liked</h2>
      <p>hover and click to send a message</p>

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
                {hoveredDogId == dog.id ? (
                  <button onClick={() => sendMessage(hoveredDogId)}>
                    <BsFillEnvelopeAtFill /> to {dog.name}
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      {popUpOn ? <PopUp setPopUpOn={setPopUpOn} toDog={toDog} /> : null}
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
