import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MyMap from "./components/map"
import MyTabs from "./components/tabs";

const json = {
  json: {
    Leo: {
      key: "132456",
      nome: "Leonardo",
      idade: 27,
      sexo: "M",
    },
    Lucas: {
      key: "123456",
      nome: "Lucas",
      sexo: "M",
    },
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyMap json={json.json} /> */}
        {MyTabs()}
      </header>
    </div>
  );
}

export default App;
