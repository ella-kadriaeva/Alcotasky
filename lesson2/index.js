// // сложность О(n^2)
// let array = [1, 0, -4, 6, -1, 9, 12, 11];
// const a = 11;
// for (let i = 0; i < array.length; i++) {
//   for (let j = i + 1; j < array.length; j++) {
//     if (array[i] + array[j] === a) {
//       console.log("#1:", array[i], array[j]);
//     }
//   }
// }
// // указатели start и end
// let arr = [-4, -2, 0, 4, 5, 11];
// const k = 4;
// let start = 0;
// let end = arr.length - 1;
// while (start < end) {
//   let sum = arr[start] + arr[end];
//   if (sum === k) {
//     console.log("#2:", arr[start], arr[end]);
//     return;
//   } else if (sum < k) {
//     start++;
//   } else {
//     end--;
//   }
// }
// знаменитость O(n)

// const lids = [
//   { personsname: "John", heKnows: ["Lev", "Oleg", "Sem"] },
//   { personsname: "Jane", heKnows: ["Lev", "Oleg", "Mikhail"] },
//   { personsname: "Lev", heKnows: ["Mikhail", "Jane", "Sem", "Oleg"] },
//   { personsname: "Oleg", heKnows: [] },
//   { personsname: "Sem", heKnows: ["Mikhail", "Jane", "Oleg"] },
//   { personsname: "Mikhail", heKnows: ["Lev", "John", "Sem", "Oleg"] }
// ];
// let start1 = 0;
// let end1 = lids.length - 1;
// let currentName = "";
// while (start1 < end1) {
//   let heKnows = lids[start1].heKnows;
//   let currentName = lids[end1].personsname;
//   if (heKnows.includes(currentName)) {
//     start1++;
//     console.log(currentName);
//     console.log(start1);
//   } else {
//     end1--;
//     console.log(currentName);
//     console.log(end1);
//   }
//   return currentName;
// }

// for (let i = 0; i < lids.length; i++) {

//   let heKnows = lids[i].heKnows;
//   if ( heKnows.includes(currentName)) {
//     console.log("person", currentName);
//   }
// }

// JAVA
// public class Person {

//     public Person getFamous(Person[] people) {
//         int start = 0;
//         int end = people.length - 1;
//         while (start < end) {
//             if (people[start].isKnown(people[end])) {
//                 start++;
//             } else {
//                 end--;
//             }
//         }

//         Person famousPerson = people[start];

//         for (int i = 0; i < people.length; i++) {
//             if (i != start) {
//                 if (!people[i].isKnown(famousPerson) || famousPerson.isKnown(people[i])) {
//                     famousPerson = null;
//                     break;
//                 }
//             }
//         }
//         return famousPerson;
//     }

//     private boolean isKnown(Person person) {
//         return false;
//     }
// }
