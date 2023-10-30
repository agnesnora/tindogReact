import "./App.css";
import { useState, useEffect } from "react";
import DogCard from "./components/DogCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { dogs } from "./data";

function App() {
  const [dogsData, setDogsData] = useState({});
  const [dogsDataClone, setDogsDataClone] = useState(dogs);
  const [currentDog, setCurrentDog] = useState(dogs[0]);

  useEffect(() => {
    setDogsData(dogs);
  }, []);

  function handleLike(e) {
    let currentIndex = dogsDataClone.indexOf(currentDog);
    const updatedDogs = [...dogsData];
    updatedDogs[currentIndex] = {
      ...updatedDogs[currentIndex],
      hasBeenLiked: true,
    };
    setDogsData(updatedDogs);

    // return answer.answerId === answerId
    // ? {
    //     ...answer,
    //     isSelected: !answer.isSelected,
    //   }
    // : { ...answer };
    setTimeout(() => {
      setCurrentDog(dogsData[currentIndex + 1]);
    }, 1500);
  }

  function handleDismiss() {
    let currentIndex = dogsData.indexOf(currentDog);
    const updatedDogs = [...dogsData];
    updatedDogs[currentIndex] = {
      ...updatedDogs[currentIndex],
      hasBeenSwiped: true,
    };
    setDogsData(updatedDogs);
    setTimeout(() => {
      setCurrentDog(dogsData[currentIndex + 1]);
    }, 3000);
  }

  function startOver() {
    setCurrentDog(dogs[0]);
  }

  return (
    <>
      <Header />
      {currentDog ? (
        <DogCard currentDog={currentDog} liked={currentDog.hasBeenLiked} />
      ) : (
        <h1 style={{ color: "black" }}>No more dogs in your area</h1>
      )}

      <Footer
        currentDog={currentDog}
        handleLike={handleLike}
        handleDismiss={handleDismiss}
        refresh={startOver}
      />
    </>
  );
}

export default App;
