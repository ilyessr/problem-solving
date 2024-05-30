/*
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique

https://leetcode.com/problems/gas-station/
*/

function canCompleteCircuit(gas, cost) {
  let totalGas = 0; // Total amount of gas available
  let totalCost = 0; // Total gas cost to travel
  let tank = 0; // Remaining gas in the tank
  let startIndex = 0; // Potential starting index

  // Iterate through all gas stations
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    tank += gas[i] - cost[i];

    // If tank is negative, we cannot proceed from the current start
    if (tank < 0) {
      // Set the next station as the new starting point
      startIndex = i + 1;
      // Reset the tank
      tank = 0;
    }
  }

  // Check if total gas available is sufficient to cover the total cost
  if (totalGas < totalCost) {
    return -1;
  }
  return startIndex;
}
