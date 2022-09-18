import {Header} from "../../../componentes/Header"
import "./styles/Inscryption.css"
import {Card} from "./objects/card"
import { useEffect, useRef, useState } from "react"



export function InscryptionGame(){
    const myBoardRef = useRef<(HTMLElement|any)[]>([])
    const [enemyBoard, setEnemyBoard] = useState<string[]>(["empty", "empty", "empty", "empty", "empty"])
    const [myBoard, setMyBoard] = useState<string[]>(["empty", "empty", "empty", "empty", "empty"])

    
    return (
    <>
    

    <div className= "MainScreen" style={{
        backgroundColor:"white",
        position:"absolute",
        top: "75px",
        bottom: "25px",
        left: "25px",
        right: "25px",
        borderRadius:"10px"        

        
    }}>
        <div className="Board">
            <div className="User">
                <Card key={0} content={myBoard[0]} refList={myBoardRef} />
                <Card key={1} content={myBoard[1]} refList={myBoardRef}/>
                <Card key={2} content={myBoard[2]} refList={myBoardRef}/>
                <Card key={3} content={myBoard[3]} refList={myBoardRef}/>
                <Card key={4} content={myBoard[4]} refList={myBoardRef}/>
            </div>
            <div className="Openent">
                <Card key={5} content={enemyBoard[0]} refList={myBoardRef}/>
                <Card key={6} content={enemyBoard[1]} refList={myBoardRef}/>
                <Card key={7} content={enemyBoard[2]} refList={myBoardRef}/>
                <Card key={8} content={enemyBoard[3]} refList={myBoardRef}/>
                <Card key={9} content={enemyBoard[4]} refList={myBoardRef}/>
            </div>
        </div>
        <div className="IDK">
            <div draggable id="SelCard">
                <button onClick={()=>setMyBoard(()=>{
                    var tempBoard = myBoard
                    tempBoard[0] = "Teste"
                    myBoardRef.current[0].innerHTML = tempBoard[0]                    
                    return tempBoard
                })}>Change a card</button>
            </div>
        </div>
        
    </div>
    <Header/>
    </>   
    )
}