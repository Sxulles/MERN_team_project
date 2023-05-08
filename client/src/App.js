import './App.css';

function App() {

  function handleRefresh(e){
    fetch('http://localhost:3001/api/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <button onClick={handleRefresh} >Refresh</button>
    </div>
  );
}

export default App;
