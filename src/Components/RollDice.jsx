

export default function RollDice({ currentDice, generateRandomNumber }) {
  
    return (
    <div className="main w-128 flex flex-col items-center justify-center">
        <img
        src={`/dice_${currentDice}.png`} 
        alt={`dice ${currentDice} image`}
        className="h-48 w-48 cursor-pointer"
        onClick={() => generateRandomNumber(1, 6)} // Roll the dice on click
      />
      <p className="h-6 font-medium">Click on the Dice to roll</p>
    </div>
  );
}
