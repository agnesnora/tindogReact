import { FaHeart } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Footer({
  handleLike,
  handleDismiss,
  currentDog,
  refresh,
}) {
  return (
    <>
      <footer>
        {" "}
        {currentDog ? (
          <>
            <button
              disabled={
                currentDog.hasBeenLiked || currentDog.hasBeenSwiped
                  ? true
                  : false
              }
              data-dismiss={currentDog.name}
              onClick={handleDismiss}
            >
              <MdClose
                data-dismiss={currentDog.name}
                className="icon dismiss"
              />
            </button>
            <button
              data-like={currentDog.name}
              disabled={
                currentDog.hasBeenLiked || currentDog.hasBeenSwiped
                  ? true
                  : false
              }
            >
              <FaHeart
                data-like={currentDog.name}
                onClick={handleLike}
                className=" icon heart"
              />
            </button>
          </>
        ) : (
          <button className="btn-refresh" onClick={refresh}>
            {" "}
            Not sure? Start again!
          </button>
        )}
      </footer>
    </>
  );
}
