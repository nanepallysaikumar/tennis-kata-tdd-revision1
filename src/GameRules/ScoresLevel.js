import { scoreLookUp } from "../Utils/ScorelookUp";
import {
  isScoresEqual,
  isScoreLessThanThree,
} from "../Validators/scoreValidator";

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isScoresEqual(playerOneScore, playerTwoScore) &&
  isScoreLessThanThree(playerOneScore, playerTwoScore);

const getScoreDescription = (playerScore) =>
  `${scoreLookUp[playerScore]} - All`;

const scoresLevel = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { scoresLevel };
