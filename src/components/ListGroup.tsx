import { useState } from "react";

function ListGroup(){

    let items = ['New York', 'Paris', 'Tokyo', 'London'];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    return(
        <>
        <h1>List Group</h1>
        {items.length === 0 && <p>Items not founds</p>}
        <ul className="list-group">
            {items.map((item,index) => (
                <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} onClick={() => setSelectedIndex(index)} key={item}>{item}</li>
            ))}
        </ul>
        </>
    );
}

export default ListGroup