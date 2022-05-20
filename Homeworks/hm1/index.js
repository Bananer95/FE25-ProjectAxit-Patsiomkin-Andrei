const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};

// Task 1
let res = Object.keys(subjects);
console.log(res.join(','));

// Task 2
let buka = Object.entries(subjects);
let result = buka.reduce((acc, res) => {
  return acc + res[1].students + res[1].teachers;
}, 0);
console.log(result);

// Task 3

let someNum = buka.reduce((acc, res) => acc + res[1].students / buka.length, 0);
console.log(someNum);

// Task 4
const arr = [];
arr[0] = subjects.mathematics;
arr[1] = subjects.biology;
arr[2] = subjects.geography;
arr[3] = subjects.chemistry;
console.log(arr);

// Task 5
const someArroy = [...arr].sort((a, b) => {
  return b.teachers - a.teachers;
});

console.log(someArroy);