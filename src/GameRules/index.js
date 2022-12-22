import { scoresLevel } from "./scoresLevel";
import { scoresMismatch } from "./ScoresMismatch";
import { deuce } from "./Deuce";
import { advantagePlayerOne } from "./AdvantagePlayerOne";
import { advantagePlayerTwo } from "./AdvantagePlayerTwo";

const gameRuleList = [
  scoresLevel,
  scoresMismatch,
  deuce,
  advantagePlayerOne,
  advantagePlayerTwo,
];

export { gameRuleList };
