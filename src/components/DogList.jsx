export default function DogList({ dogsLiked }) {
  function getDogDetails(e) {
    console.log(e.target.dataset.name);
  }

  return (
    <>
      <>
        {dogsLiked.map((dog) => {
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
