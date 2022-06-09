import Header from "../components/Header/Header";
import SessionDetail from "../components/SessionDetail/SessionDetail";
import Table from "../components/Table/Table";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-grid">
        <SessionDetail />
        <Table />
      </div>
    </div>
  );
}

export default App;
