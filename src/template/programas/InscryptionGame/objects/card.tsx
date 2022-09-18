import {MutableRefObject, useRef} from "react"
import {InscryptionGame} from "../Inscryption"
type propCards = {
    content: any,
    refList: MutableRefObject<any[]>

}

export function Card({content, refList}:propCards){
    return (
        <div className="card" ref={(ref)=>{refList.current.push(ref)}} onDrag={()=>{console.log("Dropped")}}>{content}</div>
    )
}