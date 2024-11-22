export default function StartGame ({toggle}) {
    return (
        <div className="main h-screen w-screen flex justify-center items-center">
            <div className="content h-176 w-208 border flex flex-end rounded shadow-2xl">
                <div className="leftImage h-full w-3/5 flex items-center">
                    <img src="/dices 1.png" alt=""  className="object-contain"/>
                </div>

                <div className="right  h-full w-2/5 flex flex-col items-center justify-center space-y-3">
                    <h1 className="text-5xl font-semibold">DICE GAME</h1>
                    <button onClick={toggle} className="border w-48 rounded bg-lime-400 hover:bg-lime-500">
                        PLAY!
                    </button>
                </div>
            </div>
        </div>
    )
}
