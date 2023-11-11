import { nanoid } from "nanoid";

const dogs = [
  {
    name: "Rex",
    avatar: "/images/dog-rex.jpg",
    age: 25,
    bio: "Art. Literature. Natural wine. Yoga.",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute: "",
    id: 1,
  },

  {
    name: "Teddy",
    avatar: "/images/vinci.jpg",
    age: 43,
    bio: "Chasing squirrels is my jam. Want to join?",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute:
      "https://unsplash.com/@o5ky?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    id: 2,
  },
  {
    name: "Miri",
    avatar: "/images/golden.jpg",
    age: 24,
    bio: "Chasing squirrels is my jam. Want to join?",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute:
      "https://unsplash.com/@richardbrutyo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    id: 3,
  },
  {
    name: "Dodi",
    avatar: "/images/doodle.jpg",
    age: 21,
    bio: "Beach lover and sun-soaker. Let's go!",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute:
      "https://unsplash.com/@richardbrutyo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    id: 4,
  },
  {
    name: "Daisy",
    avatar: "/images/dachshund.jpg",
    age: 31,
    bio: "Beach lover and sun-soaker. Let's go!",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute:
      "https://unsplash.com/@erdaest?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    id: 5,
  },
  {
    name: "Rudi",
    avatar: "/images/dog-basenji.jpg",
    age: 30,
    bio: "Always up for an adventure. Swipe right!",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute: "Image by bublikhaus on Freepik",
    id: 6,
  },
  {
    name: "Reddy",
    avatar: "/images/dog-collie.jpg",
    age: 38,
    bio: "Active and playful. Let's have fun together!",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute:
      "https://unsplash.com/@anderjb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    id: 7,
  },
  {
    name: "Pumi",
    avatar: "/images/colliepumi.jpg",
    age: 29,
    bio: "Seeking a cuddle buddy and treat lover.",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute: "Photo by Will Gardiner on Unsplash",
    id: 8,
  },
  {
    name: "Jani",
    avatar: "/images/jamie.jpg",
    age: 23,
    bio: "Playdates and wagging tails, here I come.",
    hasBeenSwiped: false,
    hasBeenLiked: false,
    attribute: "Photo by Jamie Street on Unsplash",
    id: 9,
  },
];

const inbox = [
  {
    from: "Jani",
    text: "Hi! You are a cat, but I don't mind. Do you like cheese?",
    img: "/images/jamie.jpg",
    id: nanoid(),
  },
  {
    from: "Rudi",
    text: "Hi! I like your profile picture, wanna grab a coffee?",
    img: "/images/dog-basenji.jpg",
    id: nanoid(),
  },
  {
    from: "Dodi",
    text: "Hey Cili! Nice to see you here buddy. What's up?",
    img: "/images/doodle.jpg",
    id: nanoid(),
  },
];

export { dogs, inbox };
