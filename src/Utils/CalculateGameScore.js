import { applicationConstants } from "../Constants/applicationConstants";
import {
  isPlayersScoreEqualsToZero,
  isScoreNotEqual,
} from "../Validators/scoreValidator";
import { scoreLookUp } from "./ScorelookUp";

const { LOVE_All } = applicationConstants;

const getGameScore = (playerOneScore, playerTwoScore) => {
  if (isPlayersScoreEqualsToZero(playerOneScore, playerTwoScore)) {
    return LOVE_All;
  }

  if (isScoreNotEqual(playerOneScore, playerTwoScore)) {
    return `${scoreLookUp[playerOneScore]} - ${scoreLookUp[playerTwoScore]}`;
  }
};

export { getGameScore };
