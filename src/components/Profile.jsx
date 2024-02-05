// import DogList from "./DogList";
import { useState, useEffect } from "react";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import PopUp from "./PopUp";
import { nanoid } from "nanoid";
import "../styles/ProfileStyles/Profile.css";

export default function Profile({
  handleClear,
  myDogs,
  checkAgain,
  dogsData,
  setMessages,
  messages,
}) {
  const [hoveredDogId, setHoveredDogId] = useState(null);
  const [popUpOn, setPopUpOn] = useState(false);
  const [toDog, setToDog] = useState("");
  const [messageValue, setMessageValue] = useState({
    to: "",
    text: "",
    img: "",
  });
  // useEffect(() => {
  //   const savedSentMessages = JSON.parse(localStorage.getItem("sentMessage"));
  //   if (savedSentMessages) {
  //     setMessages(savedSentMessages);
  //     console.log("useEffectben", messages);
  //   }
  // }, []);

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
  function handleSendMessage(message) {
    setMessages((prevMessages) => {
      const messageWithId = { ...message, id: nanoid() };
      const updatedMessages = [...prevMessages, messageWithId];
      localStorage.setItem("sentMessage", JSON.stringify(updatedMessages));
      console.log(updatedMessages);
      return updatedMessages;
    });
  }

  return (
    <div className="dogs-liked-container">
      {dogsData.length == 0 ? (
        <p>There are no more new dogs in your area, check back later</p>
      ) : null}
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
                  <div>
                    {" "}
                    <h3>{dog.name}</h3>
                    <button
                      className="send-todog-btn"
                      onClick={() => sendMessage(hoveredDogId)}
                    >
                      <BsFillEnvelopeAtFill />
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      {popUpOn ? (
        <PopUp
          setPopUpOn={setPopUpOn}
          toDog={toDog}
          setMessageValue={setMessageValue}
          messageValue={messageValue}
          sendMessage={handleSendMessage}
        />
      ) : null}
      <div className="profile-footer">
        {" "}
        <button className="btn" onClick={handleClear}>
          Clear all
        </button>
        <button className="btn" onClick={checkAgain}>
          Check again
        </button>
      </div>
    </div>
  );
}
