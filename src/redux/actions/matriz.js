export const createMatriz = ({n, m, minas}) => {
  return (dispatch) => {
    var matriz = [];
    for (let i = 0; i < n; i++) {
      matriz[i] = [];
      for (let j = 0; j < m; j++) {
        matriz[i][j] = { i, j, count: 0, hidden: true };
      }
    }

    dispatch({ type: "UPDATE_GAME_STATUS", value: "INIT"})

    dispatch({ type: "CREATE_MATRIZ", payload: { n, m, minas, data: matriz } });
  };
};

export const searchMina = (result) => {
  return (dispatch, getState) => {
    var matriz = getState().matriz.data;

    matriz.forEach((fila, i) => {
      fila.forEach((columna, j) => {
        result.forEach((res) => {
          if (res.i === i && res.j === j) {
            matriz[i][j].count = res.count;
            matriz[i][j].hidden = false;
          }
        });
      });
    });

    dispatch({ type:"UPDATE_MATRIZ", matriz })
  };
};