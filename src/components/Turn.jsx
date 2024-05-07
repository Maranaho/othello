import SwitchPlayer from "./SwitchPlayer"
import PiecesLeft from "./PiecesLeft"

const Turn = () => {

    return (
        <div className="Turn">
            <PiecesLeft isBlack />
            <SwitchPlayer />
            <PiecesLeft />
        </div>
    )
}

export default Turn