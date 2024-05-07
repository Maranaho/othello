import { useRive } from '@rive-app/react-canvas-lite'
import othello from "../assets/rive/othello.riv"
const Anim = ()=>{
    
    const stateMachineName = "Othello"
    const { RiveComponent } = useRive({
        src: othello,
        autoplay:true,
        stateMachines:stateMachineName,
        artboard:"Othello"
    })

    // const handleMouseMove = e =>{
    //     const y = e.clientY
    //     const { height } = e.target.getBoundingClientRect()
    //     const btnHover = 320 - y
    //     console.log(btnHover);
    // }


    return (
        <article
            // onMouseMove={handleMouseMove}
            className="Othello">
            <RiveComponent className="riveComponent"/>
        </article>
    )
}
export default Anim