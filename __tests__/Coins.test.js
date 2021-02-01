import { Coins } from "../src/js/Coins.js";

describe('Coins', () => {
  
  let coins;

  beforeEach(() => {
    coins = new Coins();
  });

  test("Should correctly return one quarter()", () => {
    expect(coins.calc(.25)).toEqual([1,0,0,0]);
  });

  test("Should correctly return one dime()", () => {
    expect(coins.calc(.10)).toEqual([0,1,0,0]);
  })

  test("Should correctly return one nickel()", () => {
    expect(coins.calc(.05)).toEqual([0,0,1,0]);
  })

  test("Should correctly return one penny()", () => {
    expect(coins.calc(.01)).toEqual([0,0,0,1]);
  })

});

