//Exercise #2: At Least Five Function

const atLeastFive = (array, operation) => (operation(array) >= 5 ? true : false);

const moreThanSeventy = (array) => {
  let numStudent = 0;
  for (let score of array) {
    if (score > 70) {
      numStudent++;
    }
  }
  return numStudent;
};

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, moreThanSeventy);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, moreThanSeventy);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, moreThanSeventy);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
