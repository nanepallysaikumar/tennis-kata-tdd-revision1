import { gameRuleList } from "../gameRules/index";

const getGameScore = (playerOneScore, playerTwoScore) => {
  for (const rule of gameRuleList) {
    if (rule.isCriteriaMatched(playerOneScore, playerTwoScore)) {
      return rule.getScore(playerOneScore, playerTwoScore);
    }
  }
  return;
};

export { getGameScore };
