import { useLocalstorageState } from "rooks"


const SwitchPlayer = () => {

    const [isBlacksTurn, setIsBlacksTurn] = useLocalstorageState("isBlacksTurn",true)
    const [_,setGameIsDone] = useLocalstorageState("gameIsDone",false)
    const [playerIsDone] = useLocalstorageState("playerIsDone",false)
    const [gameProgress] = useLocalstorageState("gameProgress",[])
    const nbOfEmptyPieces = gameProgress.filter(({color})=>color === "empty").length
    const gameIsFinished = nbOfEmptyPieces === 0

    const displayText = ()=>{
        let text = isBlacksTurn ? "Blue" : "White"
        if(playerIsDone) text = "Done"
        return text
    }

    const handleSwitchPlayerClick = ()=>{
        if(gameIsFinished)setGameIsDone(true)
        else setIsBlacksTurn(!isBlacksTurn)
    }

    return (
        <button
            className={`SwitchPlayer ${isBlacksTurn ? "Blue" : "White"} ${playerIsDone ? "done" : ""}`}
            disabled={!playerIsDone}
            onClick={handleSwitchPlayerClick}
        >
            <span>{displayText()}</span>
        </button>
    )
}

export default SwitchPlayer