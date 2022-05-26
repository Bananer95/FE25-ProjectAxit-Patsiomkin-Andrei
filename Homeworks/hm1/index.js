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
const res = Object.keys(subjects);
const newArroy = res.join(',');

// Task 2
const arroyTwo = Object.entries(subjects);
let result = arroyTwo.reduce((acc, res) => {
  let keyArroy = res[1];
  return acc + keyArroy.students + keyArroy.teachers;
}, 0);

// Task 3

let someNum = arroyTwo.reduce((acc, res) => {
  let keyArroyTwo = res[1];
  return acc + keyArroyTwo.students;
}, 0);
const averageAmount = someNum / arroyTwo.length;

// Task 4
const arr = [];

for (keys in subjects) {
  arr.push(keys);
}

// Task 5
const someArroy = [...arr].sort((a, b) => {
  return b.teachers - a.teachers;
});

console.log(someArroy);

// Task 2

const usersArray = Object.values(subjects);

const sumUsers = usersArray.reduce(
  (acc, users) => acc + users.students + users.teachers,
  0
);

console.log(sumUsers);
