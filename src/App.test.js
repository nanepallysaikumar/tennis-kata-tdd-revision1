import { render } from "@testing-library/react";
import App from "./App";
import { testConstants } from "./Constants/testConstants";
import {
  playerOne,
  playerTwo,
  gameScoreShouldBe,
} from "./Test-Utils/testUtils";

const {
  LOVE_ALL,
  PLAYER_ONE,
  PLAYER_TWO,
  FIFTEEN_LOVE,
  THIRTY_LOVE,
  THIRTY_ALL,
  FORTY_THIRTY,
  DEUCE,
} = testConstants;

beforeEach(() => {
  render(<App />);
});

test("When the individual points of both the players is “0”, then the running score should be ”Love - All”.", () => {
  gameScoreShouldBe(LOVE_ALL);
});

test("When the running point of player one is 1 and the running point of player two is 0 then the running score should be “Fifteen - Love”.", () => {
  playerOne.scores(1, PLAYER_ONE);
  gameScoreShouldBe(FIFTEEN_LOVE);
});

test("When the running point of player one is 2 and the running point of player two is 0 then the running score should be “Thirteen - Love”.", () => {
  playerOne.scores(2, PLAYER_ONE);
  gameScoreShouldBe(THIRTY_LOVE);
});

test("When the individual points of both the players is “2”, then the running score should be ”Thirty - All”.", () => {
  playerOne.scores(2, PLAYER_ONE);
  playerTwo.scores(2, PLAYER_TWO);
  gameScoreShouldBe(THIRTY_ALL);
});

test("When the running point of player one is 3 and the running point of player two is 2 then the running score should be “Forty - Thirty”.", () => {
  playerOne.scores(3, PLAYER_ONE);
  playerTwo.scores(2, PLAYER_TWO);
  gameScoreShouldBe(FORTY_THIRTY);
});

test("When the individual points of both the players is “3”, then the running score should be ”Deuce”.", () => {
  playerOne.scores(3, PLAYER_ONE);
  playerTwo.scores(3, PLAYER_TWO);
  gameScoreShouldBe(DEUCE);
});

test("When the individual points of both the players is greater than or equal to 4 and the running point of player one and player two are equal then the running score should be “Deuce”.", () => {
  playerOne.scores(4, PLAYER_ONE);
  playerTwo.scores(4, PLAYER_TWO);
  gameScoreShouldBe(DEUCE);
});
