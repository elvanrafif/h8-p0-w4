var alphabet = "abcdefghijklmnopqrstuvwxyz";
var res = "";
function ubahHuruf(kata) {
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (kata[i] == "z") {
        res += "a";
        break;
      }
      if (kata[i] === alphabet[j]) {
        res += alphabet[j + 1];
        // break
      }
    }
  }
  return res;
}

// TEST CASES
console.log(ubahHuruf("abcdazazaz")); // xpx
//   console.log(ubahHuruf('developer')); // efwfmpqfs
//   console.log(ubahHuruf('javascript')); // kbwbtdsjqu
//   console.log(ubahHuruf('keren')); // lfsfo
//   console.log(ubahHuruf('semangat')); // tfnbohbu
