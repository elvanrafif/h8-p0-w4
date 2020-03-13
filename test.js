function getStudents(grades, names) {
    var index = []
    var result  = []
    var nilai = 0
  
    // CHECK VALID
    if(grades == false){
      return 'Grades should not be empty'
    } else if (names == false){
      return 'Student name should not be empty'
    }
    // CARI RATA RATA NILAI
    for (i = 0; i < grades.length; i++) {
      nilai += grades[i]
    }
    var rata = nilai / grades.length
    // CARI INDEX
    for (i = 0; i < grades.length; i++) {
      if(grades[i] > rata){
        index.push(i)
      }
    }
    // CARI STUDENT
    for (i = 0; i < index.length; i++) {
      result.push(names[index[i]])
    }
    return result
  }
  
  var grades1 = [10, 9, 8, 7, 6, 8];
  var studentNames1 = ['Tony', 'Tifa', 'Cloud', 'Aerith', 'Stark', 'Asd'];
  console.log(getStudents(grades1, studentNames1));
  // [ 'Tony', 'Tifa' ]
  
  var grades2 = [3, 9, 4, 6];
  var studentNames2 = ['Aron', 'Rama', 'Gigih', 'Fauzan'];
  console.log(getStudents(grades2, studentNames2));
  // [ 'Rama', 'Fauzan' ]
  
  var grades3 = [];
  var studentNames3 = ["Rivan", "Raka", "Afif", "Gusti"];
  console.log(getStudents(grades3, studentNames3));
  // grades should not be empty
  
  var grades4 = [5, 3, 2, 10, 5];
  var studentNames4 = [];
  console.log(getStudents(grades4, studentNames4));
  // student name should not be empty