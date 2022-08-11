import {Footer} from "../componentes/Footer"
import { Header } from "../componentes/Header"
import {ListItem} from "../componentes/list-items"

const Descriptions = {
    Turing: 
    `
    Turing foi o primeiro projeto pessoal em python que desenvolvi. Este programa
    tem como função codificar e descodificar mensagens com base numa chave, que pode
    ser tanto numérica como texto. Este programa tem um significado especial para mim
    por ser uma homenagem ao filme que incentivou-me a criar os meus próprios programas-
    "O jogo da imitação".

    `
}

export function Programas(){
    return (
        <>
            
            <div style={{height:"70px"}}/>
            <ListItem ItemName="Turing Program" Description={Descriptions["Turing"]} href="/programas/Turing"/>
            <Header/>
            <footer><Footer/></footer>
            
        </>
    )
}