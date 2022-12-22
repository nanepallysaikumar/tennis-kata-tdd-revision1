import { applicationConstants } from "../Constants/applicationConstants";

const { VALUE_ZERO, VALUE_THREE, VALUE_FOUR } = applicationConstants;

const isPlayersScoreEqualsToZero = (playerOneScore, playerTwoScore) =>
  playerOneScore === VALUE_ZERO && playerTwoScore === VALUE_ZERO;

const isScoreNotEqual = (playerOneScore, playerTwoScore) =>
  playerOneScore !== playerTwoScore;

const isScoresEqual = (playerOneScore, playerTwoScore) =>
  playerOneScore === playerTwoScore;

const isScoreEqualToThree = (playerOneScore, playerTwoScore) =>
  playerOneScore === VALUE_THREE && playerTwoScore === VALUE_THREE;

const isAnyOfScoreEqualToFour = (playerOneScore, playerTwoScore) =>
  playerOneScore === VALUE_FOUR || playerTwoScore === VALUE_FOUR;

const isScoreGreaterThanOrEqualToThree = (playerOneScore, playerTwoScore) =>
  playerOneScore >= VALUE_THREE && playerTwoScore >= VALUE_THREE;

const isScoreLessThanThree = (playerOneScore, playerTwoScore) =>
  playerOneScore < VALUE_THREE && playerTwoScore < VALUE_THREE;

const isScorelessThanFour = (playerOneScore, playerTwoScore) =>
  playerOneScore < VALUE_FOUR && playerTwoScore < VALUE_FOUR;

const isAbsoluteDifferenceEqualToOne = (playerOneScore, playerTwoScore) =>
  Math.abs(playerOneScore - playerTwoScore) === 1;

const isPlayerOneScoreGreaterThanPlayerTwo = (playerOneScore, playerTwoScore) =>
  playerOneScore > playerTwoScore;

const isPlayerOneScoreLessThanPlayerTwo = (playerOneScore, playerTwoScore) =>
  playerOneScore < playerTwoScore;

const isAnyOfScoreGreaterThanEqualToFour = (playerOneScore, playerTwoScore) =>
  playerOneScore >= VALUE_FOUR || playerTwoScore >= VALUE_FOUR;

export {
  isPlayersScoreEqualsToZero,
  isScoreNotEqual,
  isScoresEqual,
  isScoreEqualToThree,
  isScoreLessThanThree,
  isScoreGreaterThanOrEqualToThree,
  isScorelessThanFour,
  isAbsoluteDifferenceEqualToOne,
  isAnyOfScoreEqualToFour,
  isPlayerOneScoreGreaterThanPlayerTwo,
  isPlayerOneScoreLessThanPlayerTwo,
  isAnyOfScoreGreaterThanEqualToFour,
};
