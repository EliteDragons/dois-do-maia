import "../styles/Header.css"

export function Header(){
    return(
        <>
            <nav className="menu">
                <a href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" width={"60px"} style={{float:"left"}}/></a>
                <input type="text"  placeholder="Search..." style={{float:"left"}}/>
                <ul className="nav-items" style={{
                    fontSize:"110%",
        }}>     

                    <li><a href="/">Início</a></li>
                    <li><a href="/contatos">Contatos</a></li>
                    <li><a href="/programas">Programas</a></li>
                    
                    
                </ul>
            </nav>
            <div style={{marginBottom: "75px"}}/>
        </>       
    
    )
}