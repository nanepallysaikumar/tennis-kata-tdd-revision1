import { applicationConstants } from "../Constants/applicationConstants";
import { isPlayersScoreEqualsToZero } from "../Validators/scoreValidator";

const {
  LOVE_All,
  FIFTEEN_LOVE,
  VALUE_ONE,
  VALUE_ZERO,
  VALUE_TWO,
  THIRTY_LOVE,
} = applicationConstants;

const getGameScore = (playerOneScore, playerTwoScore) => {
  if (isPlayersScoreEqualsToZero(playerOneScore, playerTwoScore)) {
    return LOVE_All;
  }

  if (playerOneScore === VALUE_ONE && playerTwoScore === VALUE_ZERO) {
    return FIFTEEN_LOVE;
  }

  if (playerOneScore === VALUE_TWO && playerTwoScore === VALUE_ZERO) {
    return THIRTY_LOVE;
  }
};

export { getGameScore };
