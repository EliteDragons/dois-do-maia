import "../styles/ItemList.css"

type ItemProps = {

        ItemName: string,
        Description: string,
        href: string,
        img_src: string
    
}

export function ListItem({ItemName, Description, href, img_src}:ItemProps){
    return(
        <p>
            <div id="MainDiv">
                <label className="Title"><a href={href}>{ItemName}</a></label>
                    <div className="Container">
                        
                        <p><img id="Image" width={"150px"} src={img_src} alt="" /></p>
                        <div className="Description">
                            {Description}
                        </div>
                    </div>
            </div>
        </p>
    )
}