// let studentInfo = [
//   {
//     name: "Nusrat",
//     age: 28,
//     location: "italy",
//     movie: ["kgf", "kgf2", "rrr"],
//     GPA: {
//       hsc: 5,
//       ssc: 4,
//       jsc: 4.5,
//     },
//     ismarried: true,
//     gender: "female",
//     result: {
//       bangla: 74,
//       english: 85,
//       science: 55,
//       math: 79,
//     },
//   },
//   {
//     name: "Asif",
//     age: 23,
//     location: "canada",
//     movie: ["movie 1", "movie 2", "movie 3"],
//     GPA: {
//       hsc: 4.56,
//       ssc: 4.7,
//       jsc: 4.57,
//     },
//     ismarried: false,
//     gender: "male",
//     result: {
//       bangla: 55,
//       english: 35,
//       science: 88,
//       math: 60,
//     },
//   },
//   {
//     name: "Mehedy",
//     age: 21,
//     location: "Bangladesh",
//     movie: ["Cave girl", "Kgf3", "movie 3"],
//     GPA: {
//       hsc: 3.67,
//       ssc: 5,
//       jsc: 3.67,
//     },
//     ismarried: false,
//     gender: "male",
//     result: {
//       bangla: 65,
//       english: 85,
//       science: 78,
//       math: 89,
//     },
//   },
// ];

// studentInfo.map(function (singleStudent) {
//   let res = singleStudent.result;
//   let graveAll = findGPA(res.bangla, res.english, res.science, res.math);
//   let pronoun = singleStudent.gender == "male" ? "He" : "She";
//   let possessive = singleStudent.gender == "male" ? "His" : "Her";
//   let checkMarried = singleStudent.ismarried ? "Married" : "Single";
//   let showDetails = `${singleStudent.name}  got GPA ${
//     graveAll.mainGPA
//   } and ${possessive} Grade is ${
//     graveAll.mainGrade
//   } and ${possessive} favourite movies are ${singleStudent.movie.join(" , ")}
//     and ${pronoun} is ${checkMarried}.
//       `;
//   console.log(showDetails);
// });

/**
 * Find GPA using function
 * @param {*} bangla
 * @param {*} english
 * @param {*} science
 * @param {*} math
 * @returns
 */

// function findGPA(bangla, english, science, math) {
//   let sub = [bangla, english, science, math];

//   let gradeArray = [];

//   // GPA calculate for sinle subject

//   sub.forEach(function (singleSub) {
//     let gpa;
//     let grade;
//     if (singleSub < 32) {
//       gpa = 0;
//     } else if (singleSub <= 40) {
//       gpa = 1;
//     } else if (singleSub < 50) {
//       gpa = 2;
//     } else if (singleSub < 60) {
//       gpa = 3;
//     } else if (singleSub < 65) {
//       gpa = 3.5;
//     } else if (singleSub < 70) {
//       gpa = 3.5;
//     } else if ((singleSub, 80)) {
//       gpa = 4;
//     } else if (singleSub <= 100) {
//       gpa = 5;
//     } else {
//       gpa = undefined;
//     }
//     gradeArray.push(gpa);
//   });

//   // Sum each subject GPA

//   let gradeSum = 0;
//   gradeArray.forEach((val) => {
//     gradeSum += val;
//   });

//   // return Average GPA for all subject

//   let mainGPA = gradeSum / sub.length;
//   return {
//     mainGPA: mainGPA,
//     mainGrade: findGrade(mainGPA),
//   };
// }

/**
 * Return Grade for all subject average GPA
 * @param {*} mark
 * @returns
 */
// function findGrade(mark) {
//   let grade;
//   if (mark < 1) {
//     grade = "F";
//   } else if (mark < 2) {
//     grade = "D";
//   } else if (mark < 3) {
//     grade = "C";
//   } else if (mark < 3.5) {
//     grade = "B";
//   } else if (mark < 4) {
//     grade = "A-";
//   } else if (mark < 5) {
//     grade = "A";
//   } else if ((mark = 5)) {
//     grade = "A+";
//   } else {
//     grade = undefined;
//   }
//   return grade;
// }

// let myarray = [1, 2, 2, 3, 6, 7, 8, 3, 6, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9];

// let newArr = [];

// // console.log(myarray.indexOf(myarray[1]) === 1);

// for (let i = 0; i < myarray.length; i++) {
//   if (newArr.indexOf(myarray[i]) === -1 && myarray.indexOf(myarray[i]) === i) {
//     newArr.push(myarray[i]);
//   }
// }

// console.log(newArr);
