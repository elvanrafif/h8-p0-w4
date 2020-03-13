function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    if (arrPenumpang == 0) {
        return arrPenumpang
    }

    var result = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var res = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0,
        }
        var start = 0
        var end = 0
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] == arrPenumpang[i][1]) {
                start += j + 1
            }
            if (rute[j] == arrPenumpang[i][2]) {
                end += j + 1
            }

        }
        res.bayar += (end - start) * 2000
        result.push(res)
    }
    return result
}


//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([])); //[]