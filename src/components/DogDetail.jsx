export default function DogDetail({ detailedDog }) {
  return (
    <div className="dog-text">
      <h3> {detailedDog[0] ? detailedDog[0].name : null}</h3>
    </div>
  );
}
