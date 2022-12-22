import { render } from "@testing-library/react";
import App from "./App";
import { testConstants } from "./Constants/testConstants";
import { playerOne, gameScoreShouldBe } from "./Test-Utils/testUtils";

const { LOVE_ALL, PLAYER_ONE, FIFTEEN_LOVE } = testConstants;

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
