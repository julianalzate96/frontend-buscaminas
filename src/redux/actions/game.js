import { getScore, submitScore } from "../../service/scoreService";

export const updateGameStatus = (value) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_GAME_STATUS", value });
  };
};

export const validateVictory = () => {
  return (dispatch, getState) => {
    const { minas, data } = getState().matriz;

    var result = 0;

    data.forEach((fila) => {
      let aux = fila.filter((columna) => columna.hidden);
      result += aux.length;
    });

    if (result === minas) {
      dispatch({ type: "UPDATE_GAME_STATUS", value: "WINNER" });
      submitScore("test", getState().game.score).then(async (res) => {
        let scores = await getScore();

        console.log(scores);
      });
    }
  };
};

export const updateGameScore = (value) => {
  return (dispatch) => {
    dispatch({ type: "UPDATE_GAME_SCORE", value });
  };
};
