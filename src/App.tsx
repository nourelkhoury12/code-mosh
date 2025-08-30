import ListGroup from "./components/ListGroup"

function App() {
  let items = ['New York', 'Paris', 'Tokyo', 'London'];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <div className="App">
      <ListGroup items={items} heading="Cities"  onSelectedItem={handleSelectItem}/>
    </div>
  )
}

export default App
