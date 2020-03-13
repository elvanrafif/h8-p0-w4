function tukarBesarKecil(kalimat) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    var kapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var temp = ''
    for (var i = 0; i < kalimat.length; i++) {
        for (var j = 0; j < huruf.length; j++) {
            if (kalimat[i] == huruf[j]) {
                temp += kapital[j]
                break
            } else if (kalimat[i] == kapital[j]) {
                temp += huruf[j]
                break
            } else if (j == huruf.length - 1) {
                temp += kalimat[i]
            }
        }
    }
    return temp
}



// TEST CASES
console.log(tukarBesarKecil('Hello WorldzzZZ')); // "hELLO wORLD"
//   console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
//   console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
//   console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
//   console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"