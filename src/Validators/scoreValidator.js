import { applicationConstants } from "../Constants/applicationConstants";

const { VALUE_ZERO, VALUE_THREE } = applicationConstants;

const isPlayersScoreEqualsToZero = (playerOneScore, playerTwoScore) =>
  playerOneScore === VALUE_ZERO && playerTwoScore === VALUE_ZERO;

const isScoreNotEqual = (playerOneScore, playerTwoScore) =>
  playerOneScore !== playerTwoScore;

const isScoresEqual = (playerOneScore, playerTwoScore) =>
  playerOneScore === playerTwoScore;

const isScoreEqualToThree = (playerOneScore, playerTwoScore) =>
  playerOneScore === VALUE_THREE && playerTwoScore === VALUE_THREE;

const isScoreLessThanThree = (playerOneScore, playerTwoScore) =>
  playerOneScore < VALUE_THREE && playerTwoScore < VALUE_THREE;

export {
  isPlayersScoreEqualsToZero,
  isScoreNotEqual,
  isScoresEqual,
  isScoreEqualToThree,
  isScoreLessThanThree,
};
