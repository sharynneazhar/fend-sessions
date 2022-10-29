import ContactCard from "../components/ContactCard/ContactCard";
import Header from "../components/Header/Header";
import SessionDetail from "../components/SessionDetail/SessionDetail";
import Table from "../components/Table/Table";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-sidebar">
        <SessionDetail />
        <div class="project-deadlines">
          <h2>Project Deadlines</h2>
          <ul>
            <li>Project 1: Nov. 25th</li>
            <li>Project 2: Jan. 4th</li>
            <li>Project 3: Feb. 1st</li>
            <li>Project 4: Mar. 1st</li>
          </ul>
        </div>
        <ContactCard />
      </div>
      <div className="App-content">
        <Table />
      </div>
    </div>
  );
}

export default App;
