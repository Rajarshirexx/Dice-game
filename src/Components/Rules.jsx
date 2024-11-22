export default function Rules() {
    return (
      <div className="main h-48 w-5/6  bg-red-100 p-6 rounded shadow-md flex flex-col space-y-2">
        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">How to Play the Dice Game</h2>
        
        {/* Instructions */}
        <div className="text text-sm space-y-1">
          <p>Select any number</p>
          <p>Click on the dice image</p>
          <p>
            After clicking on the dice, if the selected number is equal to the dice number,
            you will get the same points as the dice number.
          </p>
          <p>If your guess is wrong, 2 points will be deducted.</p>
        </div>
      </div>
    );
  }
  