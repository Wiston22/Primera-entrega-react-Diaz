import React from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import CardWidget from "./componentes/CardWidget";
import ItemListContainer from "./componentes/ItemListContainer"; // Asegúrate de tener la ruta correcta al componente ItemListContainer

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <CardWidget />
      <ItemListContainer />
    </React.Fragment>
  );
}

export default App;
