import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ['New York', 'Paris', 'Tokyo', 'London'];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <div className="App">
      <Alert>I need a Coffee <span>espresso</span></Alert>
      <ListGroup items={items} heading="Cities"  onSelectedItem={handleSelectItem}/>
      <Button onClick={() => console.log("Clicked")}>Button</Button>
    </div>
  )
}

export default App
