import { MouseEvent } from "react";

function ListGroup(){

    let items = ['New York', 'Paris', 'Tokyo', 'London'];

    const handleClikc = (event: MouseEvent) => console.log(event);
    return(
        <>
        <h1>List Group</h1>
        {items.length === 0 && <p>Items not founds</p>}
        <ul className="list-group">
            {items.map((item,index) => (
                <li className="list-group-item" onClick={handleClikc} key={item}>{item}</li>
            ))}
        </ul>
        </>
    );
}

export default ListGroup