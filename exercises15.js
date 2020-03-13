function highestScore(students) {
  var obj = {};
  for (i = 0; i < students.length; i++) {
    if (obj[students[i]["class"]] === undefined) {
      obj[students[i]["class"]] = {
        name: students[i].name,
        score: students[i].score
      };
    } else if (obj[students[i]["class"]]["score"] < students[i]["score"]) {
      obj[students[i]["class"]] = {
        name: students[i].name,
        score: students[i].score
      };
    }
  }
  return obj;
}

// TEST CASE
// console.log(
//   highestScore([
//     {
//       name: "Dimitri",
//       score: 20,
//       class: "foxes"
//     },
//     {
//       name: "Alexei",
//       score: 25,
//       class: "wolves"
//     },
//     {
//       name: "Sergei",
//       score: 24,
//       class: "foxes"
//     },
//     {
//       name: "Anastasia",
//       score: 28,
//       class: "wolves"
//     }
//   ])
// );

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }

//   console.log(highestScore([])); //{}
