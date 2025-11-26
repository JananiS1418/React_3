import {  Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import StateProcess from "./Components/StateProcess";  
import './App.css';
import State from "./Components/State";
import Fibanocci from "./Components/Fibanocci";

import Properties from "./Components/Properties";
import Formhandling from "./Components/Formhandling";
import Showdetails from "./Components/Showdetails";



const App = () => {
  return (
    <>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<StateProcess />} />
            <Route path="/State" element={<State />} />
            <Route path="/Fibanocci" element={<Fibanocci />} />
            <Route path="/Props" element={<Properties />} />
            <Route path="/Formhandling" element={<Formhandling/>} />
            <Route path="/Showdetails" element={<Showdetails/>} />

            
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
