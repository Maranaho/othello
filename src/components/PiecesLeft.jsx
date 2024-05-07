import { useLocalstorageState } from "rooks"

const PiecesLeft = ({isBlack}) => {

    const [gameProgress] = useLocalstorageState("gameProgress",[])

    const pieceFilter = pieceColor =>{
        const playersColor = isBlack ? "blue" : "white"
        return  pieceColor === playersColor
    }

    const nbOfPiecesOnTheBoard = gameProgress.filter(({color})=>pieceFilter(color)).length
    const thicknessPercentage = (nbOfPiecesOnTheBoard / gameProgress.length) * 100

    return (
        <article className={`PiecesLeft ${isBlack ? "blue" : "white"}`}>
            <span>{nbOfPiecesOnTheBoard}</span>
            <div style={{width: thicknessPercentage + "%"}} />
        </article>
    )
}

export default PiecesLeft