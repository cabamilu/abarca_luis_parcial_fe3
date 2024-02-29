import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [favorito, setFavorito] = useState({
    nombre: "",
    cantante: "",
  });
  const [error, setError] = useState(false);
  const [mostrarFavorito, setMostrarFavorito] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !(esNombreValido(favorito.nombre) && esCantanteValido(favorito.cantante))
    ) {
      setError(true);
      setMostrarFavorito(false);
    } else {
      setError(false);
      setMostrarFavorito(true);
    }
  };

  const esNombreValido = (nombre) => {
    return nombre.length > 2;
  };

  const esCantanteValido = (nombre) => {
    return nombre.length > 5;
  };

  return (
    <div className="App" onSubmit={submitHandler}>
      <h1>Elige tu cantante o Grupo Musical favorito</h1>
      <form className="favorito">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={favorito.nombre}
          onChange={(e) =>
            setFavorito({ ...favorito, nombre: e.target.value.trimStart() })
          }
          onFocus={() => setMostrarFavorito(false)}
        />
        <input
          type="text"
          placeholder="Ingresa tu cantante o grupo musical"
          value={favorito.cantante}
          onChange={(e) =>
            setFavorito({ ...favorito, cantante: e.target.value })
          }
          onFocus={() => setMostrarFavorito(false)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <h3>Por favor chequea que la información sea correcta</h3>}
      {mostrarFavorito && <Card favorito={favorito} />}
    </div>
  );
}

export default App;
