import { LegacyRef, MutableRefObject, useRef, useState } from "react"
import {Card} from "../objects/Card"

export function Board(){
    
    const myRef = useRef<(HTMLDivElement)[]>([])
    const [Cards, SetCards] = useState<(any[])>([
        [0, "A"],
        [1, "B"],
        [2, "C"],
        [3, "D"],
        [4, "E"],
    ])
    
    const [currentKey, setKey] = useState<number>(-1)
    const moveCursor =  async (e:any) => {
        if(e.target.dataset== null){
            return
        }
        if(currentKey==undefined){
            return
        }
        try{
            setKey(e.target.dataset["key"])
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

    const moveFinger = async (e:any) => {
        console.log(e.target.dataset)
            if(e.target.dataset["key"]!=undefined){
                setKey(e.target.dataset["key"])
                if(currentKey!=-1){
                    try{
                        myRef.current[currentKey].style.zIndex = "2"
                        myRef.current[currentKey].style.top = e.touches[0].clientY-50+ "px"
                        myRef.current[currentKey].style.left = e.touches[0].clientX-50+ "px"}
                    catch (errr){
                        //
                    }
                }
            }
               
    }

    return(
        <>
            {Cards.map((numb:any[])=>{
                return (
                <div style = {{width:"100px"}} onMouseDown={(e)=>{
                    console.log(currentKey)
                    window.addEventListener("mousemove", moveCursor)
                }} onMouseUp={()=>{
                    myRef.current[currentKey].style.zIndex = "0"
                    setKey(-1)
                    window.removeEventListener("mousemove", moveCursor)
                }}onTouchStart={(e)=>{
                    window.addEventListener("touchmove", moveFinger)
                }} onTouchEnd={()=>{
                    myRef.current[currentKey].style.zIndex = "0"
                    setKey(-1)
                    window.removeEventListener("touchmove", moveFinger)
                }}>
                    <Card refA={myRef} price={numb[0]} type={numb[1]} onMouseDown={()=>{}}/>
                </div>)
            })}

            <Card/>
        
        </>
        
    )
}