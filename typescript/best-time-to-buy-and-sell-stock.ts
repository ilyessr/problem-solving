/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

// Complexité O(n2)
//---------------------------------------------------
// function maxProfit(prices: number[]): number {
//   let maxProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     let currentPrice = prices[i];

//     for (let j = i + 1; j < prices.length - i; j++) {
//       let nextPrice = prices[j];
//       if (nextPrice > currentPrice && nextPrice - currentPrice > maxProfit) {
//         maxProfit = nextPrice - currentPrice;
//       }
//     }
//   }

//   return maxProfit;
// }

// Complexité O(n)
//--------------------------------------------------
function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}
