import { useLocalstorageState } from "rooks"

const WhoWins = () => {

    const [gameProgress] = useLocalstorageState("gameProgress",[])
    const nbOfBlue = gameProgress.filter(({color})=>color === "blue").length
    const blueWins = nbOfBlue > gameProgress.length / 2
    const winningColor = blueWins ? "Blue" : "White"
    
    const handleRestart = ()=>{
        localStorage.clear()
        location.reload()
    }

    return (
        <div className="WhoWins">
            <h1>{winningColor} wins!</h1>
            <button
                onClick={handleRestart}
                className="btn"
            >Restart the Game</button>
        </div>
    )
}

export default WhoWins