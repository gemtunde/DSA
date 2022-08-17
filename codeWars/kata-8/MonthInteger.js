// Given a month as an integer from 1 to 12, return to which
//  quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first 
// quarter; month 6 (June), is part of the second quarter; and 
// month 11 (November), is part of the fourth quarter.

// const quarterOf = (month) => {
//   // Your code here
//   if(month <= 3) return 1
//    if(month > 3 && month <=6) return 2
//   if(month > 6 && month <=9) return 3
//   if(month > 9 && month <=12) return 4 
 
// }

// console.log(quarterOf(3))//, 1)
//     console.log(quarterOf(8))//, 3)
//     console.log(quarterOf(11))//, 4)

// //best practice
// const quarterOf = m => Math.ceil(m/3);

// //best practice
// const quarterOf = (month, quarter = 4) => {
//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       quarter = 1;
//       break;
//     case 4:
//     case 5:
//     case 6:
//       quarter = 2;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       quarter = 3;
//       break;
//   }
//   return quarter;
// }

// const quarterOf = (month) => {
//   return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  
// }