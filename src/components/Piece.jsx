import { useLocalstorageState } from "rooks"

const Piece = ({
    piece,
    gameProgress,
    setGameProgress,
    setPristine,
    pristine,
}) => {

    const { index,color } = piece
    const [_, setPlayerIsDone] = useLocalstorageState("playerIsDone",false)
    const [isBlacksTurn] = useLocalstorageState("isBlacksTurn",true)
    const [previousPiece, setPreviousPiece] = useLocalstorageState("previousPiece",null)
    const otherColor = isBlacksTurn ? color === "white" :  color === "blue"

    const playing = ()=>{
        setPreviousPiece(index)
        const tmpGame = [...gameProgress]
        if(previousPiece !== null)tmpGame[previousPiece].color = "empty"
        tmpGame[index].color = isBlacksTurn ? "blue" : "white"
        setGameProgress(tmpGame)
    }

    const flip = ()=>{
        const tmpGame = [...gameProgress]
        const currentColor = tmpGame[index].color
        tmpGame[index].color = currentColor === "white" ? "blue" : "white"
        setGameProgress(tmpGame)
    }

    const handlePieceClick = ()=>{
        if(pristine) setPristine(false)
        if(index !== previousPiece) {
            if(color !== "empty") {
                if(otherColor)setPlayerIsDone(true)
                flip()
            }
            if(color === "empty" && gameProgress.length > 0) playing()
        }
    }

    
    return (
        <button
            className={`Piece ${color} ${isBlacksTurn && color === "empty"?"emptyBlue":"emptyWhite"}`}
            onClick={handlePieceClick}
        >
        </button>
    )
}

export default Piece