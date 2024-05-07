import { useLocalstorageState } from "rooks"
import Anim from './Anim'

import pieces from "../assets/images/pieces.svg"

const StartTheGame = () => {

    const [_, setGameHasStarted] = useLocalstorageState("gameHasStarted",false)
    return (
        <div className="StartTheGame">
            <h1>Othello</h1>
            <button
                 onClick={()=>setGameHasStarted(true)}
                 className="btn"
            >Start</button>
            {/* <img src={pieces} /> */}
            <Anim/>
        </div>
    )
}

export default StartTheGame