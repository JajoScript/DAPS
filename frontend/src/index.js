// Dependencias.
import React from "react";
import { createRoot } from "react-dom/client";

// Importación de componentes.
import App from "!components/App/index.jsx";

// Estilos globales.
import "./styles/styles.scss";

// Renderizado.
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);
