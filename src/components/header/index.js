import React, { useState } from "react";
import { connect } from "react-redux";

import { sendMessage } from "../../config/socket"
import { createMatriz } from "../../redux/actions/matriz"
import "./header.scss"

function Header(props) {
  const [matriz, setMatriz] = useState({ n: 0, m: 0, minas: 0 });

  const handleSendMatriz = () => {

    props.createMatriz(matriz);

    const message = {
      message: "GENERAR_MATRIZ",
      filas: matriz.n,
      columnas: matriz.m,
      minas: matriz.minas,
    };

    sendMessage(JSON.stringify(message));
  };

  return (
    <header>
      <div className="size-container">
      <input
        type="number"
        placeholder="filas"
        onChange={({ target }) =>
          setMatriz({ ...matriz, n: parseInt(target.value) })
        }
      />
      <input
        type="number"
        placeholder="columnas"
        onChange={({ target }) =>
          setMatriz({ ...matriz, m: parseInt(target.value) })
        }
      />
      </div>
      <button className="iniciar" onClick={handleSendMatriz}>
        INICIAR
      </button>

      <input
        type="number"
        className="minas"
        placeholder="cantidad de minas"
        onChange={({ target }) =>
          setMatriz({ ...matriz, minas: parseInt(target.value) })
        }
      />
    </header>
  );
}

export default connect(null, {
  createMatriz
})(Header)
