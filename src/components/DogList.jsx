export default function DogList({ dogsLiked }) {
  console.log(dogsLiked);
  // const { dogsLiked } = props;
  // const dogsListEl = return dogsLiked.map((dog) => {
  //   <div>{dog.avatar}</div>;
  // });
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
