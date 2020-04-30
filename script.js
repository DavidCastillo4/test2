/*
Given two numbers, say x and y, 
write a program that 
determines if the numbers are either between the range of 
0-20 or 80-100
, which includes the edges of the limit: 0, 20, 80, and 100.

withinLimits(10, 99) // => true
withinLimits(21, 81) // => false
*/


let withinLimits = (a, b) => {
  let r1 = 0, r2 = 20;
  let r3 = 80, r4 = 100;
  let isBetweenRanges = false

  if ((a >= r1 && a <= r2) && (b >= r3 && b <= r4)) {
    isBetweenRanges = true
  }
  console.log(isBetweenRanges)
}

withinLimits(10, 99) //true
withinLimits(21, 81) //false
