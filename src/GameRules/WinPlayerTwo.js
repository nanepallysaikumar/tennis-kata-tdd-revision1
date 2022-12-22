import {
  isAnyOfScoreGreaterThanEqualToFour,
  isAbsoluteDifferenceEqualToTwo,
  isPlayerOneScoreLessThanPlayerTwo,
} from "../Validators/scoreValidator";
import { applicationConstants } from "../Constants/applicationConstants";

const { WIN_PLAYER_TWO } = applicationConstants;

const validateCriteria = (playerOneScore, playerTwoScore) =>
  isAnyOfScoreGreaterThanEqualToFour(playerOneScore, playerTwoScore) &&
  isAbsoluteDifferenceEqualToTwo(playerOneScore, playerTwoScore) &&
  isPlayerOneScoreLessThanPlayerTwo(playerOneScore, playerTwoScore);

const getScoreDescription = () => WIN_PLAYER_TWO;

const winPlayerTwo = {
  isCriteriaMatched: validateCriteria,
  getScore: getScoreDescription,
};

export { winPlayerTwo };
