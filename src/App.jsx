import "./App.css";
import { useState, useEffect } from "react";
import DogCard from "./components/DogCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DogList from "./components/DogList";

import { dogs } from "./data";

function App() {
  const [dogsData, setDogsData] = useState({});
  const [dogsDataClone, setDogsDataClone] = useState(dogs);
  const [currentDog, setCurrentDog] = useState(dogs[0]);
  const [dogsLiked, setDogsLiked] = useState([]);

  useEffect(() => {
    setDogsData(dogs);
  }, []);
  function saveMyDogs() {
    const dogsLikedString = JSON.stringify(dogsLiked);
    localStorage.setItem("dogsLiked", dogsLikedString);
  }

  function showMyDogs() {
    const retrievedDogsLikedString = localStorage.getItem("dogsLiked");
    const retrievedDogsLiked = JSON.parse(retrievedDogsLikedString);
    console.log(retrievedDogsLiked);
  }
  function handleLike(e) {
    let currentIndex = dogsDataClone.indexOf(currentDog);
    const updatedCurrentDog = {
      ...currentDog,
      hasBeenLiked: true,
    };
    setCurrentDog(updatedCurrentDog);

    setTimeout(() => {
      setCurrentDog(dogsData[currentIndex + 1]);
      setDogsLiked([...dogsLiked, updatedCurrentDog]);
      saveMyDogs();
    }, 1000);
  }

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
    setDogsLiked([]);
  }

  return (
    <div className="main-container">
      <Header showMyDogs={showMyDogs} />
      {currentDog ? (
        <DogCard
          currentDog={currentDog}
          liked={currentDog.hasBeenLiked}
          swiped={currentDog.hasBeenSwiped}
        />
      ) : (
        <>
          {" "}
          <p>No more dogs in your area</p>
          <p>Your dogs</p>
          <div className="dogList-container">
            <DogList dogsLiked={dogsLiked} />
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
