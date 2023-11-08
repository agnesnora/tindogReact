import { useState } from "react";
import DogDetail from "./DogDetail";
export default function DogList({ myDogs }) {
  console.log(myDogs);
  const [detailedDog, setDetailedDog] = useState({});
  function getDogDetails(e) {
    console.log(e.target.dataset.id);
    let detailedId = e.target.dataset.id;

    const dog = myDogs.find((item) => item.id === detailedId);
    setDetailedDog(dog);
    console.log(dog);
  }

  return (
    <>
      <>
        <DogDetail detailedDog={detailedDog} />
        {myDogs.map((dog) => {
          return (
            <div
              onClick={getDogDetails}
              className="dog-liked"
              key={dog.name}
              data-name={dog.name}
            >
              <h3>{dog.name}</h3>
              <img
                src={dog.avatar}
                data-name={dog.name}
                onClick={getDogDetails}
              />
            </div>
          );
        })}
      </>
      {}
    </>
  );
}
