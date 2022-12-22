import {
  isScoresEqual,
  isScoreGreaterThanOrEqualToThree,
} from "../Validators/scoreValidator";
import { applicationConstants } from "../Constants/applicationConstants";

const { DEUCE } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isScoresEqual(playerOneScore, playerTwoScore) &&
  isScoreGreaterThanOrEqualToThree(playerOneScore, playerTwoScore);

const getScoreDescription = () => DEUCE;

const deuce = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { deuce };
