import {MutableRefObject, useRef} from "react"
type propCards = {
    content: any,
    refList: MutableRefObject<any[]>,
    func?: Function,
    id?: number

}

export function Card({content, refList,func=()=>{}, id}:propCards){
    return (
        <div className="card" ref={(ref)=>{refList.current.push(ref)}} onDrag={()=>{console.log("Dropped")}} onClick={()=>func()}>{content}</div>
    )
}