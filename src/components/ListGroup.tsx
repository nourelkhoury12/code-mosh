function ListGroup(){

    let items = ['New York', 'Paris', 'Tokyo', 'London'];

    return(
        <>
        <h1>List Group</h1>
        {items.length === 0 && <p>Items not founds</p>}
        <ul className="list-group">
            {items.map((item) => (
                <li className="list-group-item" key={item}>{item}</li>
            ))}
        </ul>
        </>
    );
}

export default ListGroup