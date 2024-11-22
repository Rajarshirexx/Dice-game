import StartGame from "./Components/StartGame"
import { useState } from "react"
import GamePlay from "./Components/GamePlay"


export default function App () {
  
  const [isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }

  return(
    <div className="main">
      {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay} />}
    </div>
  )
}