// var findTheDifference = function (s, t) {
//   let news = s.split("").sort();
//   let newt = t.split("").sort();

//   for (let i = 0; i < t.length; i++) {
//     if (news[i] == newt[i]) {
//       return ture;
//     } else {
//       return news[i];
//     }
//   }
//   return console.log(news);
// };

// findTheDifference("adadadada", "adadadada1");

// /////////////////////////////////
// var reverseStr = function (s, k) {

//     let arr=s.split()
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//   }
// };

// reverseStr("abcd", 2);
// var reverseStr = function (s, k) {
//   if (k == 1) return s;
//   let newArr = [];
//   for (let i = 0; i < s.length; i * k) {
//     newArr.push(
//       s
//         .slice(i, i + k)
//         .split()
//         .reverse()
//         .join("")
//     );
//     newArr.push(s.slice(i + k, i + k * 2));
//   }
//   return newArr.join("");
// };

// reverseStr("abcdefg", 2);
// var isPowerOfTwo = function (n) {};
// var largeGroupPositions = function (s) {
//   let count = 1;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == s[i + 1]) {
//       count++;

//       if (count <= 3) {
//         return str[i];
//       }
//     } else {
//       count = 0;
//     }
//   }
// };
// largeGroupPositions("abbxxxxzzy");
