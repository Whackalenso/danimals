import "./App.css";
import SoundCard from "./components/SoundCard";
import animals from "./animals.json";

function App() {
  var soundCards = [];
  for (var key in animals) {
    soundCards.push(<SoundCard animal={animals[key]} key={key} />);
  }

  return (
    <div className="App">
      <h1 className="title">Daniel Animal Translator</h1>
      <div className="sound-cards">{soundCards}</div>
    </div>
  );
}

export default App;
