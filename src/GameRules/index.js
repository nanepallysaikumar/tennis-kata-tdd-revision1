import { scoresLevel } from "./scoresLevel";
import { scoresMismatch } from "./ScoresMismatch";
import { deuce } from "./Deuce";
import { advantagePlayerOne } from "./AdvantagePlayerOne";
import { advantagePlayerTwo } from "./AdvantagePlayerTwo";
import { winPlayerOne } from "./WinPlayerOne";
import { winPlayerTwo } from "./WinPlayerTwo";

const gameRuleList = [
  scoresLevel,
  scoresMismatch,
  deuce,
  advantagePlayerOne,
  advantagePlayerTwo,
  winPlayerOne,
  winPlayerTwo,
];

export { gameRuleList };
