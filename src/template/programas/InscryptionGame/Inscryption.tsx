import {Header} from "../../../componentes/Header"
import "./styles/Inscryption.css"
import {Card} from "./objects/card"
import { useEffect, useRef, useState } from "react"



export function InscryptionGame(){
    const myBoardRef = useRef<(HTMLElement|any)[]>([])
    const enemyBoardRef = useRef<(HTMLElement|any)[]>([])
    const [enemyBoard, setEnemyBoard] = useState<string[]>(["", "", "", "", ""])
    const [myBoard, setMyBoard] = useState<string[]>(["", "", "", "", ""])

    const ChangeMyCard= (id:number)=>{
        setMyBoard(()=>{
            myBoard[id] = "Clicou caralho!!"
            return myBoard
        })
        myBoardRef.current[id].innerHTML="Clicou caralho!!"
    }

    const ChangeTheirCard = (id:number)=>{
        setEnemyBoard(()=>{
            enemyBoard[id] = "Clicou caralho!!"
            return enemyBoard
        })
        enemyBoardRef.current[id].innerHTML = "Clicou caralho!!"
    }
    
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
                <Card key={0} id={0} content={myBoard[0]} refList={myBoardRef} func={()=>ChangeMyCard(0)}/>
                <Card key={1} id={1} content={myBoard[1]} refList={myBoardRef} func={()=>ChangeMyCard(1)}/>
                <Card key={2} id={2} content={myBoard[2]} refList={myBoardRef} func={()=>ChangeMyCard(2)}/>
                <Card key={3} id={3} content={myBoard[3]} refList={myBoardRef} func={()=>ChangeMyCard(3)}/>
                <Card key={4} id={4} content={myBoard[4]} refList={myBoardRef} func={()=>ChangeMyCard(4)}/>
            </div>
            <div className="Openent">
                <Card key={0} id={0} content={enemyBoard[0]} refList={enemyBoardRef} func={()=>ChangeTheirCard(0)}/>
                <Card key={1} id={1} content={enemyBoard[1]} refList={enemyBoardRef} func={()=>ChangeTheirCard(1)}/>
                <Card key={2} id={2} content={enemyBoard[2]} refList={enemyBoardRef} func={()=>ChangeTheirCard(2)}/>
                <Card key={3} id={3} content={enemyBoard[3]} refList={enemyBoardRef} func={()=>ChangeTheirCard(3)}/>
                <Card key={4} id={4} content={enemyBoard[4]} refList={enemyBoardRef} func={()=>ChangeTheirCard(4)} />
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