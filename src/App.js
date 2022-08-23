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
  for (var i = 0; i < animals.length; i++) {
    soundCards.push(<SoundCard animal={animals[i]} key={i} />);
  }
  return (
    <div className="App">
      <section className="Info">
        <h1 className="title">Danimals</h1>
        <h3 className="description"><i>
          Click on an animal to hear what it sounds like
       </i></h3>
        <h6 className="love">Made with <span className="emogi">☕️</span>  by Ajith, Daniel, and Nigel, during <a href="https://github.com/hackclub/assemble" target="_blank">Assemble</a> 2022 in 48 hours</h6>
      </section>
      <div className="sound-cards">{soundCards}</div>
    </div>
  );
}

export default App;
