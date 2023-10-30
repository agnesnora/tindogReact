import Badge from "./Badge";

export default function DogCard(props) {
  const { currentDog } = props;
  console.log(currentDog);
  return (
    <>
      <div
        className="container"
        style={{ backgroundImage: `url(${currentDog.avatar})` }}
      >
        <div className="content">
          <h1>{currentDog.name}</h1>
          <p>{currentDog.bio}</p>
        </div>
      </div>
      {currentDog.hasBeenSwiped && <div className="liked-badge">NOPE</div>}
    </>
  );
}
