import "./App.css";
import { useState, useEffect } from "react";
import DogCard from "./components/DogCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import DogList from "./components/DogList";
import Profile from "./components/Profile";
// import cat from "../public/images/catProfile.jpg";

import { dogs } from "./data";

function App() {
  const [dogsData, setDogsData] = useState({});
  // const [dogsDataClone, setDogsDataClone] = useState(dogs);
  const [currentDog, setCurrentDog] = useState(dogs[0]);
  const [isNewGame, setIsNewGame] = useState(false);
  const [myDogs, setMyDogs] = useState([]);
  const [profileOn, setProfileOn] = useState(false);

  useEffect(() => {
    setDogsData(dogs);
  }, [isNewGame]);

  useEffect(() => {
    const savedDogs = JSON.parse(localStorage.getItem("dogs"));
    if (savedDogs) {
      setMyDogs(savedDogs);
    }
  }, []);

  function showMyDogs() {
    setProfileOn(true);

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
    const updatedDogs = [...myDogs, currentDog];
    setMyDogs(updatedDogs);
    localStorage.setItem("dogs", JSON.stringify(updatedDogs));
    setDogsData((prevData) =>
      prevData.filter((item) => item.id !== currentDog.id)
    );

    setTimeout(() => {
      setCurrentDog(dogsData[currentIndex + 1]);
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
    setIsNewGame(true);
    setCurrentDog(dogsData[0]);

    setProfileOn(false);
  }
  function checkAgain() {
    setCurrentDog(dogsData[0]);

    setProfileOn(false);
  }

  function handleClear() {
    setMyDogs([]);
    localStorage.removeItem("dogs");
  }

  return (
    <div className="main-container">
      {/* <Profile handleClear={handleClear} myDogs={myDogs} /> */}
      <Header showMyDogs={showMyDogs} startOver={startOver} />
      {currentDog && !profileOn ? (
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
        />
      ) : (
        <>
          {" "}
          <p>No more dogs in your area</p>
          {/* <div className="dogList-container">
            <DogList myDogs={myDogs} />
          </div> */}
        </>
      )}
      {currentDog && !profileOn ? (
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
