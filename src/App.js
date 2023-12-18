import React from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import CardWidget from "./componentes/CardWidget";
import ItemListContainer from "./componentes/ItemListContainer";

function App() {
  const greetingMessage =
    "¡Hola! Bienvenido a Adidas, Explora nuestra tienda. Anímate a revisar en nuestras secciones los productos que te interesen.";

  return (
    <React.Fragment>
      <Navbar />
      <CardWidget />
      <ItemListContainer greeting={greetingMessage} />
    </React.Fragment>
  );
}

export default App;
