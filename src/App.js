import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <h1>WhatsApp Clone!</h1>

      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
