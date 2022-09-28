import {MutableRefObject } from "react"
import "../styles/Crad.css"

type CardProps = {
    type?: string,
    price?:number,
    refA?:MutableRefObject<(HTMLDivElement | null)[]>,
    onMouseDown?:Function | null
}


export function Card({type="", price=0, refA, onMouseDown=()=>{}}:CardProps){

    return (
        <div style={{paddingBottom:"100px"}}>
            <div ref={refA!=undefined?(ref)=>{refA.current.push(ref)}:(ref)=>ref}  className="Card" onMouseDown={onMouseDown()}>
                <img data-key={price} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.caymancompass.com%2Fwp-content%2Fuploads%2F2016%2F10%2FCTF-Queen-Butterfly4.jpg&f=1&nofb=1&ipt=6a4efbfc71c4054e7e84cda365e5a27802da96c381d42d9af21245dfa26471ce&ipo=images" alt="" />
            </div>
        </div>
    )
    
}