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

    const updatedCurrentDog = {
      ...currentDog,
      hasBeenLiked: true,
    };
    setCurrentDog(updatedCurrentDog);
    setTimeout(() => {
      setCurrentDog(dogsData[currentIndex + 1]);
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
  }

  return (
    <>
      <Header />
      {currentDog ? (
        <DogCard
          currentDog={currentDog}
          liked={currentDog.hasBeenLiked}
          swiped={currentDog.hasBeenSwiped}
        />
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

{
  /* <>
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
</> */
}

export default App;

// return (
//   <div>
//     {photos.map((photo, index) => (
//       <div key={index}>
//         {photo.hasBeenLiked && <div className="liked-badge">Liked</div>}
//         <img src={photo.image} alt={`Photo ${index}`} />
//         <button onClick={handleLike}>Like</button>
//         <p>Liked: {photo.hasBeenLiked ? 'Yes' : 'No'}</p>
//       </div>
//     ))}
//   </div>
// );
