import {
  isAnyOfScoreGreaterThanEqualToFour,
  isAbsoluteDifferenceEqualToTwo,
  isPlayerOneScoreGreaterThanPlayerTwo,
} from "../Validators/scoreValidator";

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isAnyOfScoreGreaterThanEqualToFour(playerOneScore, playerTwoScore) &&
  isAbsoluteDifferenceEqualToTwo(playerOneScore, playerTwoScore) &&
  isPlayerOneScoreGreaterThanPlayerTwo(playerOneScore, playerTwoScore);

const getScoreDescription = () => "Win Player One";

const winPlayerOne = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { winPlayerOne };
