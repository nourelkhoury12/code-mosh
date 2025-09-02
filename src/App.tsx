import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ['New York', 'Paris', 'Tokyo', 'London'];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }

  const [ alertVisible, setAlertVisible ] = useState(false);

  return (
    <div className="App">
      <ListGroup items={items} heading="Cities"  onSelectedItem={handleSelectItem}/>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisible(true)}>Button</Button>
    </div>
  )
}

export default App
