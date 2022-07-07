import ContactCard from "../components/ContactCard/ContactCard";
import Header from "../components/Header/Header";
import SessionDetail from "../components/SessionDetail/SessionDetail";
import Table from "../components/Table/Table";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-grid">
        <div className="App-sidebar">
          <SessionDetail />
          <ContactCard />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;
