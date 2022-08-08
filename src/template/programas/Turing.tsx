import {Header} from "../../componentes/Header"
import "./TuringCss.css"
import {useRef, useState} from "react"


export function Turing_template(){
    const [mode, setMode] = useState(0)
    const ref = useRef<any>(null)
    const ref_key = useRef<any>(null)

    const SendRequest = async () =>{
        if (ref.current != null && ref_key.current != null){
            await fetch("http://89.153.17.162:5000/", {
                body: JSON.stringify({
                    mode:mode,
                    text: ref.current.value,
                    key: ref_key.current.value
                }),
                method:"POST",
                mode: "cors",
                headers:{
                    "Content-Type": "application/json"
                }
            }).then(data =>{ return data.json()})
            .then(res=> {
                if(ref.current != null){
                    ref.current.value = res["text"]
                }
            })
            .catch(error => console.log(error))
        }
    }
        
    
    const handleClick = (event: any)=>{
        SendRequest()
    }

    return (
        <>
            <Header/>
            <div className="MainDiv">
                <div className="form">
                    <textarea ref = {ref} id="text_input" rows={15} placeholder="Escreva o texto aqui..."></textarea>
                    <span>
                        <p><input type="radio" value="Codificar" name="mode" onClick={()=>setMode(1)}/>Codificar</p>
                        <p><input type="radio" value="Descodificar" name ="mode" onClick={()=>setMode(-1)}/>Descodificar</p>
                        <p><input type="text" ref = {ref_key} placeholder="Chave"/></p>
                        <p><button onClick={handleClick}>Enviar</button></p>
                        
                    </span>
                    
                </div>
                
            </div>
            
        </>

    )
}