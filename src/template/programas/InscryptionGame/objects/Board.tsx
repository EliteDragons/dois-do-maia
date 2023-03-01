import { MutableRefObject, useRef, useState } from "react"
import "../styles/Crad.css"
let Casulo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-zVwglek9RNE%2FTcr58Mg_ZMI%2FAAAAAAAAARM%2FDFrrsPQ-slY%2Fs1600%2Fcasulo%2B2.JPG"
let Borboleta = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.caymancompass.com%2Fwp-content%2Fuploads%2F2016%2F10%2FCTF-Queen-Butterfly4.jpg"
type CardProps = {
    type?: string,
    price?:number,
    refA?:MutableRefObject<(HTMLDivElement | null)[]>,
    onMouseDown?:Function
}


export function Card({type="", price=0, refA, onMouseDown=()=>{}}:CardProps){
    
    return (
        <div style={{paddingBottom:"100px"}}>
            <div ref={refA!=undefined?(ref)=>{refA.current.push(ref)}:(ref)=>ref}  className="Card" onMouseDown={onMouseDown()}>
                <img data-key={price} src={Casulo} alt="" />
            </div>
        </div>
    )
    
}
export function Board(){
    
    const myRef = useRef<(HTMLDivElement)[]>([])
    const [Cards, SetCards] = useState<(any[])>([
        [0, "A", false],
        [1, "B", false],
        [2, "C", false],
        [3, "D", false],
        [4, "E", false],
    ])
    
    var [currentKey, setKey] = useState<number>(-1)
    const moveCursor =  (e:any) => {
        if(e.target.src == Casulo){
            return
        }
        if(e.target.dataset["key"]!=undefined){
            try{
                currentKey = e.target.dataset["key"]
                if(currentKey!=-1){
                    myRef.current[currentKey].style.zIndex = "2"
                    myRef.current[currentKey].style.top = e.clientY-50 + "px"
                    myRef.current[currentKey].style.left = e.clientX-50 + "px"                      
                }
                         
                }
                catch{
                    //
                }   
        }
        currentKey = -1
       
    }    

    const moveFinger = (e:any) => {
        if(e.target.src == Casulo){
            return}
            if(e.target.dataset["key"]!=undefined){
                try{
                    currentKey = e.target.dataset["key"]
                    if(currentKey!=-1){
                    
                        
                        myRef.current[currentKey].style.zIndex = "2"
                        myRef.current[currentKey].style.top = e.touches[0].clientY-50+ "px"
                        myRef.current[currentKey].style.left = e.touches[0].clientX-50+ "px"}
                    }catch (errr){
                        //
                    }
        
        
                }
            
                currentKey = -1
            }
            

    const handleClick = async (e:any) =>{
            e.target.src = Borboleta
            window.removeEventListener("click", handleClick)
    }

    return(
        <>
            {Cards.map((numb:any[])=>{
                return (
                <div style = {{width:"100px"}} onMouseDown={(e)=>{
                    window.addEventListener("mousemove", moveCursor)
                }} onMouseUp={()=>{
                    try{myRef.current[currentKey].style.zIndex = "0"}
                    catch {}
                    window.removeEventListener("mousemove", moveCursor)
                }}onTouchStart={(e)=>{
                    window.addEventListener("touchmove", moveFinger)
                }} onTouchEnd={()=>{
                    try{myRef.current[currentKey].style.zIndex = "0"}
                    catch {}
                    window.removeEventListener("touchmove", moveFinger)
                    
                }}onClick={()=>{
                    window.addEventListener("click", handleClick)
                }}>
                    <Card refA={myRef} price={numb[0]} type={numb[1]} onMouseDown={()=>{}}/>
                </div>)
            })}
        
        </>
        
    )
}