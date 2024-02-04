import Badge from "./Badge";
import "../styles/DogCardStyles/DogCard.css";
export default function DogCard(props) {
  const { currentDog } = props;

  return (
    <>
      <div
        className="dogCard-container"
        style={{ backgroundImage: `url(${currentDog.avatar})` }}
      >
        <div className="content">
          <h1>
            {currentDog.name}, {currentDog.age}
          </h1>
          <p>{currentDog.bio}</p>
        </div>
      </div>

      {currentDog.hasBeenSwiped ? (
        <Badge variant="dismiss">Nope</Badge>
      ) : currentDog.hasBeenLiked ? (
        <Badge variant="like">Like</Badge>
      ) : null}
    </>
  );
}
