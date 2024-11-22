export default function NumberSelector({error, setError, selectedNumber, setSelectedNumber }) {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    function numberSelectorHandler (value) {
        setSelectedNumber(value)
        setError("")
    }
  
    return (
      <div className="main flex flex-col p-4 w-96 rounded min-h-24 items-center space-y-2">
       
        
          <p className="text-center font-semibold">SELECT NUMBER</p>
        
  
        <div className="number-options flex space-x-2">
          {arrNumber.map((value, index) => (
            <div
              key={index}
              className={`box h-10 w-10 border text-center py-2 rounded font-semibold cursor-pointer ${
                value === selectedNumber ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => {numberSelectorHandler(value)}}
            >
              {value}
            </div>
          ))}
        </div>
         {/* Error message displayed above the number selector */}
         {error && (
          <p className="border bg-red-600 text-white text-center rounded text-sm p-1 mb-2">
            {error}
          </p>
        )}
      </div>
    );
  }
  