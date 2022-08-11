import { useState } from "react"
import "../styles/Header.css"
import menu from "./menu.png"




export function Header(){
    const [state, setState] = useState(false)
    const menu_div = (
        <div id = "menu_div">
            <a href="/"><li>Homepage</li></a>
            <a href="/contatos"><li>Contatos</li></a>
            <a href="/programas/"><li style = {{borderWidth: "0px 0px 0px 0px"}}>Programas</li></a>
        </div>
    )
    


    return(
        <div>
            <header style={{display:"flex", flex:0.1}}>
                <div className="menu">
                    <button id = "menu" onClick={()=>setState(state?false:true)}><img src={menu} width={"30px"} alt="" /></button>

                    
                </div>
                <input id = "search" type="search" placeholder="Procurar..."/>
                <a href = "/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" width="50px" style={{position:"absolute", right:"8px", top:"8px"}}/></a>
            </header>
            <div>
                {state && menu_div}
            </div>
        </div>       
    
    )
}