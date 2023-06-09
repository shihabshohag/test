const bloodDoner = [
  {
    id: 1,
    name: "Shihab",
    age: 20,
    group: "B+",
    gender: "Male",
    phone: +8801706025806,
    address: "Pabna",
    lastDonate: 30,
    donateTime: 9,
    donars: ["one", "two", "three"],
  },
  {
    id: 2,
    name: "Shohag",
    age: 18,
    group: "A+",
    gender: "Male",
    phone: +8801706625806,
    address: "Natore",
    lastDonate: 60,
    donateTime: 5,
    donars: ["one", "two", "three"],
  },
  {
    id: 3,
    name: "Siam",
    age: 30,
    group: "B-",
    gender: "Male",
    phone: +8801706065806,
    address: "Rajshahi",
    lastDonate: 30,
    donateTime: 15,
    donars: ["one", "two", "three"],
  },
  {
    id: 4,
    name: "Farjana",
    age: 19,
    group: "AB+",
    gender: "FeMale",
    phone: +8801750025806,
    address: "Sirahganj",
    lastDonate: 180,
    donateTime: 3,
    donars: ["one", "two", "three"],
  },
  {
    id: 5,
    name: "Raka",
    age: 25,
    group: "AB-",
    gender: "FeMale",
    phone: +8801750905806,
    address: "Dhaka",
    lastDonate: 110,
    donateTime: 5,
    donars: ["one", "two", "three"],
  },
  {
    id: 6,
    name: "tuli",
    age: 16,
    group: "B-",
    gender: "FeMale",
    phone: +8801750026606,
    address: "Barishal",
    lastDonate: 0,
    donateTime: 0,
    donars: [""],
  },
];

const search = "B-";

// filter data

const searchResult = bloodDoner.filter(
  (data) => data.group === search || data.gender === search
);

// final sreach result

const finalResult = [];

// get data

searchResult.forEach((item, index) => {
  finalResult.push(item);
});

// show result

console.table(finalResult);

// bloodDoner.map((item) => {
//   if ((item.age >= 18, item.lastDonate >= 120)) {
//     console.log(
//       `Dear sir, You'er searching for ${item.group} so, Now ${item.name} is available for donate and his contact number is ${item.phone}, He/She donate ${item.donateTime} and this people ${item.donars}`
//     );
//   } else if (item.lastDonate >= 100) {
//     console.log(
//       `Dear sir, You'er searching for ${item.group} so, Now ${
//         item.name
//       } is notavailable for donate and his contact number is ${
//         item.phone
//       }, but He/She can donate after ${
//         120 - item.lastDonate
//       } days also he/she donate ${item.donateTime} and this people is ${
//         item.donars
//       }`
//     );
//   }
// });

// const bloodDetails = {
//   name: "tuli",
//   age: 16,
//   group: "B-",
//   gender: "FeMale",
//   phone: +8801750026606,
//   address: "Barishal",
//   lastDonate: 000,
//   donateTime: 0,
//   donars: [""],
// };

// if (bloodDetails.gender.toLowerCase() === "female") {
//   console.log("she");
// } else {
//   console.log("Hw");
// }

// bloodDoner.forEach((item, index) => {
//   if (item != "shihab") {
//     console.log(`${index}. Hi ${item} you are wellcome`);
//   }
// });

// 2nd way

// const student = {
//   id: 1,
//   name: "montaj",
//   age: 15,
//   sub: {
//     ban: 34,
//     eng: 32,
//     math: 87,
//     history: 76,
//     science: 54,
//     bioScience: 64,
//     religion: 100,
//   },
// };

// function getCgpa(subs) {
//   let total = 0;
//   for (key in subs) {
//     total = total + subs[key];
//   }
//   return total;
// }

// let totalMark = getCgpa(student.sub);

// console.log(totalMark);
