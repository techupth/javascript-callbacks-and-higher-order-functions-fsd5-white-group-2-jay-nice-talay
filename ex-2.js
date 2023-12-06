//Exercise #2: At Least Five Function

// Start coding here

//Higher order functions
const atLeastFive = (array, operation) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count = operation(array[i]) ? count + 1 : count;
    if (count >= 5) return true;
  }
  return false;
};
//Callback function
const isScoreThan70 = (score) => score > 70;

//Array of StudentScoreRoom
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result, scoreRoom2Result, scoreRoom3Result;
scoreRoom1Result = atLeastFive(studentScoresRoom1, isScoreThan70);
scoreRoom2Result = atLeastFive(studentScoresRoom2, isScoreThan70);
scoreRoom3Result = atLeastFive(studentScoresRoom3, isScoreThan70);
// Log Result
console.log(
  `scoreRoom1Result is ${scoreRoom1Result}\nscoreRoom2Result is ${scoreRoom2Result}\nscoreRoom3Result  is ${scoreRoom3Result}`
);
