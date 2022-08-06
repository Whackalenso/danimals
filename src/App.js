import "./App.css";
import SoundCard from "./components/SoundCard";

const animals = [
  "bear",
  "bee",
  "bird",
  "cat",
  "cockroach",
  "cow",
  "dog",
  "dolphin",
  "eagle",
  "elephant",
  "fish",
  "fox",
  "frog",
  "goat",
  "goose",
  "hippo",
  "horse",
  "owl",
  "penguin",
  "pig",
  "platypus",
  "rooster",
  "seal",
  "snake",
  "t-rex",
  "tucan",
  "turkey",
  "walrus",
];

function App() {
  var soundCards = [];
  for (var i = 0; i < animals.length; i++) {
    soundCards.push(<SoundCard animal={animals[i]} key={i} />);
  }

  return (
    <div className="App">
      <h1 className="title">Daniel Animal Translator</h1>
      <div className="sound-cards">{soundCards}</div>
    </div>
  );
}

export default App;
