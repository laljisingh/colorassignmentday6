import Card from "./component/Card"
import './App.css';

function App() {
  const card1 = {
    name: "red",
    color: "red",
    code: "#596322"
  };
  const card2 = {
    name: "red",
    color: "green",
    code: "#092222"
  };
  const card3 = {
    name: "red",
    color: "yellow",
    code: "#12566"
  };
  const card4 = {
    name: "red",
    color: "orange",
    code: "#592222"
  };
  
  return (
    <div className="App">
      <h1>Props</h1>
      <div>
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      <Card data={card1} />
      <Card data={card2} />
      <Card data={card3} />
      <Card data={card4} />
      </div>
    </div>
  );
}

export default App;
