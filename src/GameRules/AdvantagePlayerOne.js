import {
  isAnyOfScoreEqualToFour,
  isAbsoluteDifferenceEqualToOne,
  isPlayerOneScoreGreaterThanPlayerTwo,
} from "../Validators/scoreValidator";
import { applicationConstants } from "../Constants/applicationConstants";

const { ADVANTAGE_PLAYER_ONE } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isAnyOfScoreEqualToFour(playerOneScore, playerTwoScore) &&
  isAbsoluteDifferenceEqualToOne(playerOneScore, playerTwoScore) &&
  isPlayerOneScoreGreaterThanPlayerTwo(playerOneScore, playerTwoScore);

const getScoreDescription = () => ADVANTAGE_PLAYER_ONE;

const advantagePlayerOne = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { advantagePlayerOne };
