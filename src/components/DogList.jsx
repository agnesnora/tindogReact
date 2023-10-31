export default function DogList({ dogsLiked }) {
  return (
    <>
      <>
        {dogsLiked.map((dog) => {
          return (
            <div className="dog-liked" key={dog.name}>
              <h3>{dog.name}</h3>
              <img src={dog.avatar} />
            </div>
          );
        })}
      </>
      {}
    </>
  );
}
