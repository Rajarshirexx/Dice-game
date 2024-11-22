


export default function Totalscore ({score}) {
    return (
        <div className="main h-24 w-24 border rounded flex items-center flex-col justify-center">
            <h1 className="text font-bold text-6xl">
                {score}
            </h1>
            <p>Total Score</p>
        </div>
    )
}