import "./App.css";
import SoundCard from "./components/SoundCard";

function App() {
  return (
    <div className="App">
      <h1 className="title">Daniel Animal Translator</h1>
      <div className="sound-cards">
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
        <SoundCard />
      </div>
    </div>
  );
}

export default App;
