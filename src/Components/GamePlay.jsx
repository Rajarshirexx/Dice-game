import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";
import Totalscore from "./TotalScore";
import { useState } from "react";

export default function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState(); // Selected number from NumberSelector
  const [currentDice, setCurrentDice] = useState(1); // Initialize current dice to 1
  const [score, setScore] = useState(0); // Correct syntax for useState
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)

  function resetScore () {
    setScore(0)
  }

  // Function to generate a random number between min and max
  function generateRandomNumber(min, max) {
    if (!selectedNumber) {
        setError("You have not selected any number");
        return;
    }
    setError("")

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setCurrentDice(randomNumber); // Set the new dice value

    

    if (selectedNumber === randomNumber) {
      setScore((prevScore) => prevScore + randomNumber);
    } else {
      setScore((prevScore) => prevScore - 2);
    }

    setSelectedNumber(undefined)

  }

  return (
    <div className="main h-screen w-screen flex items-center justify-center p-4">
      <div className="game h-176 w-208 bg-white border shadow-2xl p-4">
        <div className="topSection flex justify-between h-36">
          <Totalscore score={score} />
          <NumberSelector
            setError = {setError}
            error = {error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <div className="mid items-center h-4/5 flex space-y-2 flex-col border justify-center">
          <RollDice
            
            currentDice={currentDice}
            generateRandomNumber={generateRandomNumber} // Pass the function as a prop
          />
          <div className="buttons flex flex-col space-y-3 py-3">
            <button className="h-8 w-36 rounded bg-black border text-white hover:bg-white hover:text-black"
            onClick={resetScore}
            >Reset</button>
            <button className="h-8 w-36 rounded bg-blue-400 border hover:bg-blue-600 text-white" onClick={
              () => setShowRules((prev) => !prev)
            }>{
              showRules ? "Hide" : "Show"
              } Rules</button>
          </div>
          {showRules && <Rules/>}
        </div>
      </div>
    </div>
  );
}
