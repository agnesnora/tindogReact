import Badge from "./Badge";

export default function DogCard(props) {
  const { currentDog } = props;
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
        {/* {currentDog.hasBeenLiked ? (
          <Badge />
        ) : currentDog.hasBeenSwiped ? (
          <Badge />
        ) : null} */}
      </div>
    </>
  );
}
