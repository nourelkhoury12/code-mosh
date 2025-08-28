import ListGroup from "./components/ListGroup"

function App() {
   let items = ['New York', 'Paris', 'Tokyo', 'London'];

  return (
    <div className="App">
      <ListGroup items={items} heading="Cities" />
    </div>
  )
}

export default App
