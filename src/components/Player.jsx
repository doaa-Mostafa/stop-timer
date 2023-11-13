import { useState,useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName]= useState(null);
   
  function hadleClick(){
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'} </h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={hadleClick}>Set Name</button>
      </p>
    </section>
  );
}
