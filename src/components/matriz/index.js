import React, { useEffect } from "react";
import { connect } from "react-redux";

import { socket, sendMessage } from "../../config/socket";
import { searchMina } from "../../redux/actions/matriz";
import { updateGameStatus, validateVictory, updateGameScore } from "../../redux/actions/game";
import "./matriz.scss";
import { submitScore } from "../../service/scoreService";

function Matriz(props) {
  useEffect(() => {
    socket.onmessage = ({ data }) => {
      var resMatriz = JSON.parse(data);

      switch (resMatriz.message) {
        case "LOSE":
          props.updateGameStatus("LOSER");
          break;
        case "datos":
          var result = resMatriz.data.map((res) => {
            let aux = res.split(",");
            return {
              i: parseInt(aux[0]),
              j: parseInt(aux[1]),
              count: parseInt(aux[2]),
            };
          });
          props.searchMina(result);

          props.updateGameScore(result.length * 10);

          props.validateVictory();
          break;
        default:
          alert("ERROR");
      }
    };
    socket.onclose = () => {
      console.log("socket cerrado.");
    };
    return () => {
      socket.close();
    };
  }, []);

  const renderMatriz = () => {
    const { m, data } = props.matriz;
    return data.map((fila, i) => {
      return fila.map((columna, j) => {
        return (
          <button
            key={j}
            style={{
              width: `${100 / m}%`,
              minHeight: 25,
              background: data[i][j].hidden ? "black" : "#D3D3D3",
              border: `1px solid ${
                data[i][j].hidden ? "white" : "transparent"
              }`,
            }}
            onClick={() => handleBuscar(j, i)}
            className={`color-${columna.count}`}
          >
            {!columna.hidden && columna.count !== 0 && columna.count}
          </button>
        );
      });
    });
  };

  const handleBuscar = (columna, fila) => {
    const { data } = props.matriz;
    if (data[fila][columna].hidden) {
      const message = {
        message: "BUSCAR_MINA",
        filas: fila,
        columnas: columna,
      };
      sendMessage(JSON.stringify(message));
    }
  };

  const submitScoreAction = () => {
    submitScore("test", props.game.score)
    .then(res => console.log("RES: ", res))
  }

  return (
    <div className="matriz">
      {renderMatriz()}
      {props.game.status !== "INIT" && <div className="alert-container">
        {props.game.status === "LOSER" && <h1 className="loser">PERDISTE</h1>}
        {props.game.status === "WINNER" && <h1 className="winner">GANASTE</h1> && submitScoreAction}
      </div>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    matriz: state.matriz,
    game: state.game,
  };
};

export default connect(mapStateToProps, {
  searchMina,
  updateGameStatus,
  validateVictory,
  updateGameScore
})(Matriz);
