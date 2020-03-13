function changeMe(arr) {
    var CE = {}

    for (i = 0; i < arr.length; i++) {
        CE.firstName = arr[i][0]
        CE.lastName = arr[i][1]
        CE.gender = arr[i][2]
        CE.age = 2020 - arr[i][3]
        if (arr[i][3] == undefined || arr[i][3] > 2020) {
            CE.age = 'Invalid Birth Year'
        }
        console.log(i + 1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ' :')
        console.log(CE)
    }
    if (arr.length == 0) {
        console.log('""')
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1995],
    ['Robert', 'Downey', 'Male']
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""