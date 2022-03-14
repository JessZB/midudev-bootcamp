import './App.css';

const HelloColors = (props) =>{
  return <h2 style={{color: props.color}}>{props.msg}</h2>
}

function App() {
  return (
    <div className="App">
     <HelloColors color="red" msg="Hola"/>
     <HelloColors color="blue" msg="Buenas"/>
     <HelloColors color="yellow" msg="Trades :D"/>
    </div>
  );
}

export default App;
