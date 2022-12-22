import {
  isAnyOfScoreEqualToFour,
  isAbsoluteDifferenceEqualToOne,
  isPlayerOneScoreLessThanPlayerTwo,
} from "../Validators/scoreValidator";
import { applicationConstants } from "../Constants/applicationConstants";

const { ADVANTAGE_PLAYER_TWO } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isAnyOfScoreEqualToFour(playerOneScore, playerTwoScore) &&
  isAbsoluteDifferenceEqualToOne(playerOneScore, playerTwoScore) &&
  isPlayerOneScoreLessThanPlayerTwo(playerOneScore, playerTwoScore);

const getScoreDescription = () => ADVANTAGE_PLAYER_TWO;

const advantagePlayerTwo = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { advantagePlayerTwo };
