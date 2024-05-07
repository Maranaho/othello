import Piece from "./Piece"
import Turn from "./Turn"
import WhoWins from "./WhoWins"
import StartTheGame from "./StartTheGame"
import { useEffect,useState } from "react"
import { useLocalstorageState } from "rooks"

const Game = ()=>{


    const findMiddlePieces = index =>{
        const isWhite = index === 27 || index === 36
        const isBlack = index === 28 || index === 35
        const color = isWhite ? "white" : isBlack ? "blue" : "empty"
        return { index, color }
    }


    const columns = 8
    const nbOfPieces = columns * columns
    const piecesArray = Array.from(Array(nbOfPieces).keys())
    const defaultGame = piecesArray.map(index=>findMiddlePieces(index))
    const [gameProgress, setGameProgress] = useLocalstorageState("gameProgress",[])
    const [__, setPlayerIsDone] = useLocalstorageState("playerIsDone",false)
    const [gameIsDone] = useLocalstorageState("gameIsDone",false)
    const [isBlacksTurn] = useLocalstorageState("isBlacksTurn",true)
    const [_, setPreviousPiece] = useLocalstorageState("previousPiece",null)
    const [gameHasStarted] = useLocalstorageState("gameHasStarted",false)
    const [pristine, setPristine] = useState(true)

    const handleTurnChange = ()=>{
        if(!pristine){
            setPlayerIsDone(false)
            setPreviousPiece(null)
        }
    }

    
    useEffect(handleTurnChange,[isBlacksTurn])
    useEffect(()=>{
        if(gameProgress.length === 0)setGameProgress([...defaultGame])
    },[])


    if(!gameHasStarted) return <StartTheGame />
    if(gameIsDone) return <WhoWins />
    if(gameProgress.length === 0) return "Loading..."
    return (
        <section className="Game">
            <Turn />
            {gameProgress.map(piece=>{
                const { index } = piece
                return (
                    <Piece
                        key={index}
                        piece={piece}
                        gameProgress={gameProgress}
                        setGameProgress={setGameProgress}
                        setPristine={setPristine}
                        pristine={pristine}
                    />
                )
            })}
        </section>
    )
}
export default Game