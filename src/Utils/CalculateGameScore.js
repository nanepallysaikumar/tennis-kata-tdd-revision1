import { applicationConstants } from "../Constants/applicationConstants";
import {
  isPlayersScoreEqualsToZero,
  isScoreNotEqual,
  isScoresEqual,
  isScoreEqualToThree,
  isScoreLessThanThree,
} from "../Validators/scoreValidator";
import { scoreLookUp } from "./ScorelookUp";

const { LOVE_All, DEUCE } = applicationConstants;

const getGameScore = (playerOneScore, playerTwoScore) => {
  if (isPlayersScoreEqualsToZero(playerOneScore, playerTwoScore)) {
    return LOVE_All;
  }

  if (isScoreNotEqual(playerOneScore, playerTwoScore)) {
    return `${scoreLookUp[playerOneScore]} - ${scoreLookUp[playerTwoScore]}`;
  }

  if (
    isScoresEqual(playerOneScore, playerTwoScore) &&
    isScoreLessThanThree(playerOneScore, playerTwoScore)
  ) {
    return `${scoreLookUp[playerOneScore]} - All`;
  }

  if (
    isScoresEqual(playerOneScore, playerTwoScore) &&
    isScoreEqualToThree(playerOneScore, playerTwoScore)
  ) {
    return DEUCE;
  }
};

export { getGameScore };
