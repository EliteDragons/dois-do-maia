import "../styles/ItemList.css"

type ItemProps = {

        ItemName: string,
        Description: string,
        href: string
    
}

export function ListItem({ItemName, Description, href}:ItemProps){
    return(
        <div id="MainDiv">
            <label className="Title"><a href={href}>{ItemName}</a></label>
                <div className="Container">
                    
                    <p><img id="Image" width={"150px"} src="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2012/05/turing_VideoIndex.jpg?itok=Y06X7sRg" alt="" /></p>
                    <div className="Description">
                        {Description}
                    </div>
                </div>
        </div>
    )
}