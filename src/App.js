import "./App.css";
import SoundCard from "./components/SoundCard";

const animals = [
  "bear",
  "bee",
  "bird",
  "cat",
  "cow",
  "cricket",
  "dog",
  "dolphin",
  "donkey",
  "eagle",
  "elephant",
  "fish",
  "fox",
  "frog",
  "goat",
  "goose",
  "hippo",
  "horse",
  "koala",
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
  var Speaker = <audio id="speaker"></audio>
  for (var i = 0; i < animals.length; i++) {
    soundCards.push(<SoundCard animal={animals[i]} key={i} speaker={Speaker} />);
}
return (
    <div className="App">
      <section className="Info">
        <h1 className="title">Danimals</h1>
        <h3 className="description">Hover / Click on an animal to here what it sounds like</h3>
      </section>
      <div className="sound-cards">{soundCards}</div>
    </div>
  );
}

export default App;
