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
  ADVANTAGE_PLAYER_ONE,
  ADVANTAGE_PLAYER_TWO,
  WIN_PLAYER_ONE,
  WIN_PLAYER_TWO,
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

test("When the running point of player one is 4 and running point of player two is 3 then the running score should be “Advantage Player1”.", () => {
  playerOne.scores(4, PLAYER_ONE);
  playerTwo.scores(3, PLAYER_TWO);
  gameScoreShouldBe(ADVANTAGE_PLAYER_ONE);
});

test("When the running point of player one is 3 and running point of player two is 4 then the running score should be “Advantage Player2”.", () => {
  playerOne.scores(3, PLAYER_ONE);
  playerTwo.scores(4, PLAYER_TWO);
  gameScoreShouldBe(ADVANTAGE_PLAYER_TWO);
});

test("When the individual points of both the players is greater than equal to 5 and the Absolute difference between running point of player 1 and player 2 is equal to 1 then the running score should be “Advantage Player1” if the running point of player 1 is greater than running point of player2", () => {
  playerOne.scores(6, PLAYER_ONE);
  playerTwo.scores(5, PLAYER_TWO);
  gameScoreShouldBe(ADVANTAGE_PLAYER_ONE);
});

test("When the individual points of both the players is greater than equal to 5 and the Absolute difference between running point of player 1 and player 2 is equal to 1 then the running score should be “Advantage Player2” if the running point of player 2 is greater than running point of player1.", () => {
  playerOne.scores(5, PLAYER_ONE);
  playerTwo.scores(6, PLAYER_TWO);
  gameScoreShouldBe(ADVANTAGE_PLAYER_TWO);
});

test("When the running point of player one is greater than or equal to 4 and the running point of player two is less than or equal to 2 then Game should be declared win for “Player One”.", () => {
  playerOne.scores(4, PLAYER_ONE);
  playerTwo.scores(2, PLAYER_TWO);
  gameScoreShouldBe(WIN_PLAYER_ONE);
});

test("When the running point of player two is greater than or equal to 4 and the running point of player one is less than or equal to 2 then Game should be declared win for “Player Two”.", () => {
  playerOne.scores(2, PLAYER_ONE);
  playerTwo.scores(4, PLAYER_TWO);
  gameScoreShouldBe(WIN_PLAYER_TWO);
});
