function digitPerkalianMinimum(angka) {
    // var temp = []
    var baris = []
    for (var i = 1; i <= angka; i++){
        for (var j = 1; j <= angka; j++){
            if (i * j == angka){
                baris.push(i+''+j)
            }
        }
    }
    for (var i = 0; i < baris.length; i++){
        for (var j = 0; j < baris.length -1; j++){
            var kos = baris[j]
            if (baris[j].length > baris[j+1].length){
                baris[j] = baris[j+1]
            }
            if (baris[j] == baris[j+1]){
                baris[j+1] = kos
            }
        }
    }
    var hasil = baris[0].length
    return hasil
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2