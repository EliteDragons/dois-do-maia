import {Footer} from "../componentes/Footer"
import { Header } from "../componentes/Header"
import {ListItem} from "../componentes/list-items"

const Descriptions = {
    Turing: 
    `
    Turing foi o primeiro projeto pessoal em python que desenvolvi. Este programa
    tem como função codificar e descodificar mensagens com base numa chave, que pode
    ser tanto numérica como texto.
    Inspiração -- "O jogo da imitação".

    `, 
    Inscryption:
    `
    Inscryption, um jogo de cartas,
    `
}

export function Programas(){
    return (
        <>
            
            <div style={{height:"70px"}}/>
            <ListItem ItemName="Turing Program" Description={Descriptions["Turing"]} href="/programas/Turing" img_src="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2012/05/turing_VideoIndex.jpg?itok=Y06X7sRg"/>
            <ListItem ItemName="Inscryption" Description={Descriptions["Inscryption"]} href="/programas/Inscryption" img_src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.newgamesbox.net%2Fwp-content%2Fuploads%2F2020%2F09%2FInscryption-Free-Download.jpg&f=1&nofb=1"/>
            <Header/>
            <footer><Footer/></footer>
            
        </>
    )
}