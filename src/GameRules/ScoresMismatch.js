import { scoreLookUp } from "../Utils/ScorelookUp";
import {
  isScoreNotEqual,
  isScorelessThanFour,
} from "../Validators/scoreValidator";

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isScoreNotEqual(playerOneScore, playerTwoScore) &&
  isScorelessThanFour(playerOneScore, playerTwoScore);

const getScoreDescription = (playerOneScore, playerTwoScore) =>
  `${scoreLookUp[playerOneScore]} - ${scoreLookUp[playerTwoScore]}`;

const scoresMismatch = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { scoresMismatch };
