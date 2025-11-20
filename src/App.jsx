import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import StateProcess from "./Components/StateProcess";  
import './App.css';

const App = () => {
  return (
    <>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<StateProcess />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
