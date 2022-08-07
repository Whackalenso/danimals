import "./SoundCard.css";
import React, { useState } from "react";
import ReactHowler from "react-howler";

const capitalize = (string) => {
  return string.replace(/^\w/, (c) => c.toUpperCase());
};

export default function SoundCard({ animal }) {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <ReactHowler
        src={`/audio/${animal}/${animal}_1.m4a`}
        playing={play}
        onStop={() => {
          setPlay(false);
        }}
      />
      <div
        className="sound-card"
        onMouseEnter={() => {
          console.log(animal);
        }}
        onClick={() => {
          if (!play) {
            setPlay(true);
          }
        }}
      >
        <div className="sound-images">
          <img src={require(`../images/${animal}.png`)} />
        </div>
        <p className="sound-card-subtitle">{capitalize(animal)}</p>
      </div>
    </div>
  );
}
