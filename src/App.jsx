import "./App.css";
import { useState, useEffect } from "react";
import DogCard from "./components/DogCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DogList from "./components/DogList";
import Profile from "./components/Profile";

import { dogs } from "./data";

function App() {
  const [dogsData, setDogsData] = useState({});
  const [dogsDataClone, setDogsDataClone] = useState(dogs);
  const [currentDog, setCurrentDog] = useState(dogs[0]);

  const [myDogs, setMyDogs] = useState([]);
  const [profileOn, setProfileOn] = useState(false);
  console.log(myDogs);

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
    console.log(profileOn);
    const savedDogs = JSON.parse(localStorage.getItem("dogs"));
    if (savedDogs) {
      setMyDogs(savedDogs);
    }
  }

  const handleLike = () => {
    let currentIndex = dogsDataClone.indexOf(currentDog);
    const updatedCurrentDog = {
      ...currentDog,
      hasBeenLiked: true,
    };
    setCurrentDog(updatedCurrentDog);
    const updatedDogs = [...myDogs, currentDog];
    setMyDogs(updatedDogs);
    localStorage.setItem("dogs", JSON.stringify(updatedDogs));

    setTimeout(() => {
      setCurrentDog(dogsData[currentIndex + 1]);
      // setDogsLiked([...dogsLiked, updatedCurrentDog]);
      // setMyDogs(dogsLiked);
      // localStorage.setItem("dogs", JSON.stringify(dogsLiked));
      // saveMyDogs();
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
    setCurrentDog(dogs[0]);
    // setDogsLiked([]);
    setProfileOn(false);
  }

  function handleClear() {
    setMyDogs([]);
    localStorage.removeItem("dogs");
    console.log(myDogs);
  }

  return (
    <div className="main-container">
      {/* <Profile handleClear={handleClear} dogsLiked={myDogs} /> */}
      <Header showMyDogs={showMyDogs} startOver={startOver} />
      {currentDog && !profileOn ? (
        <DogCard
          currentDog={currentDog}
          liked={currentDog.hasBeenLiked}
          swiped={currentDog.hasBeenSwiped}
        />
      ) : profileOn ? (
        <Profile handleClear={handleClear} dogsLiked={myDogs} />
      ) : (
        <>
          {" "}
          <p>No more dogs in your area</p>
          <div className="dogList-container">
            <DogList dogsLiked={myDogs} />
          </div>
        </>
      )}

      <Footer
        currentDog={currentDog}
        handleLike={handleLike}
        handleDismiss={handleDismiss}
        refresh={startOver}
      />
    </div>
  );
}

export default App;
