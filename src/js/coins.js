export class Coins {
  constructor() {
    this.coinCount = [0, 0, 0, 0];
    this.quarters = .25;
    this.dimes = .10;
    this.nickles = .5;
    this.pennies = .01;
  }

  calc(amount, coinCount = [0, 0, 0, 0]) {
    if(amount < .01) {
      return coinCount;
    }
    else {
      if(amount >= .25){
        const newCoinCount = coinCount.map(function(element, index) {
          if(index === 0) {
            return element += 1;
          }
          return element;
        });
        return this.calc(amount - .25, newCoinCount); 
      }
      if(amount >= .10){
        const newCoinCount = coinCount.map(function(element, index) {
          if(index === 1) {
            return element += 1;
          }
          return element;
        });
        return this.calc(amount - .10, newCoinCount);
      }
      if(amount >= .05){
        const newCoinCount = coinCount.map(function(element, index) {
          if(index === 2) {
            return element += 1;
          }
          return element;
        });
        return this.calc(amount - .05, newCoinCount);
      }
      if(amount >= .01){
        const newCoinCount = coinCount.map(function(element, index) {
          if(index === 3) {
            return element += 1;
          }
          return element;
        });
        return this.calc(amount - .01, newCoinCount); 
      } 
    }
  }
}

// NON-RECURSIVE & Non-"FUNCTIONAL"
// export class nonRecursiveCoins {
//   constructor() {
//     this.coinCount = [0, 0, 0, 0];
//     this.quarters = .25;
//     this.dimes = .10;
//     this.nickles = .5;
//     this.pennies = .01;
//   }

// calc(amount) {
//   if(amount < .01) {
//     return 
//   }
//   else {
//     if(amount >= .25){
//       this.coinCount[0] += 1;
//       return this.calc(amount - .25) 
//     }
//     if(amount >= .10){
//       this.coinCount[1] += 1;
//       return this.calc(amount - .10);
//     }
//     if(amount >= .05){
//       this.coinCount[2] += 1;
//       return this.calc(amount - .05); 
//     }
//     if(amount >= .01){
//       this.coinCount[3] += 1;
//       return this.calc(amount - .01); 
//     } 
//   }
// }

//   calc(amount) {
//     if(amount >= .25){
//       this.coinCount[0] = Math.floor(amount / this.quarters);
//       amount = amount % this.quarters; 

//     }
//     if(amount >= .10){
//       this.coinCount[1] = Math.floor(amount / this.dimes)
//       amount = amount % this.dimes;

//     }
//     if(amount >= .05){
//       this.coinCount[2] = Math.floor(amount / this.nickles)
//       amount = amount % this.nickles; 
//     }
//     if(amount >= .01){
//       this.coinCount[3] = Math.floor(amount / this.pennies)
//       amount = amount % this.pennies; 
//     } 
//   }
// }
