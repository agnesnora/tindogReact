import "./App.css";
import { useState, useEffect } from "react";
import DogCard from "./components/DogCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import DogList from "./components/DogList";
import Profile from "./components/Profile";
import Messages from "./components/Messages";
// import cat from "../public/images/catProfile.jpg";

import { dogs } from "./data";

function App() {
  const [dogsData, setDogsData] = useState({});
  // const [dogsDataClone, setDogsDataClone] = useState(dogs);
  const [currentDog, setCurrentDog] = useState(dogs[0]);
  const [isNewGame, setIsNewGame] = useState(false);
  const [myDogs, setMyDogs] = useState([]);
  const [profileOn, setProfileOn] = useState(false);
  const [messageOn, setMessageOn] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setDogsData(dogs);
  }, []);

  useEffect(() => {
    const savedDogs = JSON.parse(localStorage.getItem("dogs"));
    if (savedDogs) {
      setMyDogs(savedDogs);
    }
  }, []);

  function showMyDogs() {
    setProfileOn(true);
    setMessageOn(false);

    const savedDogs = JSON.parse(localStorage.getItem("dogs"));
    if (savedDogs) {
      setMyDogs(savedDogs);
    }
  }

  const handleLike = () => {
    let currentIndex = dogsData.indexOf(currentDog);
    const updatedCurrentDog = {
      ...currentDog,
      hasBeenLiked: true,
    };
    setCurrentDog(updatedCurrentDog);
    const isAlreadyLiked = myDogs.some((dog) => dog.id == updatedCurrentDog.id);
    const updatedDogs = isAlreadyLiked
      ? [...myDogs]
      : [...myDogs, updatedCurrentDog];

    setMyDogs(updatedDogs);
    localStorage.setItem("dogs", JSON.stringify(updatedDogs));
    setDogsData((prevData) =>
      prevData.filter((item) => item.id !== currentDog.id)
    );

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      setCurrentDog(nextIndex < dogsData.length ? dogsData[nextIndex] : null);
    }, 1000);
  };

  function handleDismiss() {
    let currentIndex = dogsData.indexOf(currentDog);

    const updatedCurrentDog = {
      ...currentDog,
      hasBeenSwiped: true,
    };

    setCurrentDog(updatedCurrentDog);
    setTimeout(() => {
      setCurrentDog(dogsData[currentIndex + 1]);
    }, 1000);
  }

  function startOver() {
    messageOn ? setMessageOn(false) : null;
    if (dogsData.length == 0) {
      return <h1>no more dogs,come back later</h1>;
    } else {
      setCurrentDog(dogsData[0]);
    }

    setProfileOn(false);
  }
  function checkAgain() {
    dogsData.length > 0 ? setCurrentDog(dogsData[0]) : null;

    // setCurrentDog(dogsData[0]);

    setProfileOn(false);
  }

  function handleClear() {
    setMyDogs([]);
    setDogsData(dogs);

    localStorage.removeItem("dogs");
  }

  function checkMessages() {
    console.log("messaages in check messages", messages);
    setMessageOn(true);
  }

  return (
    <div className="main-container">
      {/* <Profile handleClear={handleClear} myDogs={myDogs} /> */}

      <Header
        showMyDogs={showMyDogs}
        startOver={startOver}
        checkMessages={checkMessages}
        // setMessageOn={setMessageOn}
      />
      {messageOn ? (
        <Messages setMessages={setMessages} messages={messages} />
      ) : currentDog && !profileOn ? (
        <DogCard
          currentDog={currentDog}
          liked={currentDog.hasBeenLiked}
          swiped={currentDog.hasBeenSwiped}
        />
      ) : profileOn ? (
        <Profile
          handleClear={handleClear}
          myDogs={myDogs}
          checkAgain={checkAgain}
          dogsData={dogsData}
          setMessages={setMessages}
          messages={messages}
        />
      ) : (
        <>
          {" "}
          {myDogs.length == 0 ? <p>No more dogs in your area</p> : ""}
          <Profile
            handleClear={handleClear}
            myDogs={myDogs}
            checkAgain={checkAgain}
            dogsData={dogsData}
            setMessages={setMessages}
            messages={messages}
          />
        </>
      )}
      {currentDog && !profileOn && !messageOn ? (
        <Footer
          currentDog={currentDog}
          handleLike={handleLike}
          handleDismiss={handleDismiss}
          refresh={checkAgain}
        />
      ) : null}
    </div>
  );
}

export default App;
