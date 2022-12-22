import { applicationConstants } from "../Constants/applicationConstants";

const { VALUE_ZERO } = applicationConstants;

const isPlayersScoreEqualsToZero = (playerOneScore, playerTwoScore) =>
  playerOneScore === VALUE_ZERO && playerTwoScore === VALUE_ZERO;

const isScoreNotEqual = (playerOneScore, playerTwoScore) =>
  playerOneScore !== playerTwoScore;

export { isPlayersScoreEqualsToZero, isScoreNotEqual };
