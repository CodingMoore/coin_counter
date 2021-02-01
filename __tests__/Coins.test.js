import { Coins } from "../src/js/Coins.js";

describe('Coins', () => {
  
  let coins;

  beforeEach(() => {
    coins = new Coins();
  });

  test("Should correctly return one quarter()", () => {
    expect(coins.calc(.23)).toEqual([1,0,0,0]);
  });

});

