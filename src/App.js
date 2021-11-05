import Item from "./components/item";
import Card from "./components/card";
const App = () => {
  return(
    <>
      <h1>My first aplication in React</h1>
      <ul>
        
        <Item>
          Item One
        </Item>
        <Item>
          Item Two
        </Item>
        <Item>
          Item Three
        </Item>
        
       
      </ul>
      <Card>
        
      </Card>
    </>
  )
}

export default App;