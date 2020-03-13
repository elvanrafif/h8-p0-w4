// var res = []
// var hasil = 0
// function cariModus(arr) {
    
//     for (var i = 0; i < arr.length; i++){
//         var temp = 0
//         for (var j= i+1; j < arr.length; j++){
//             if (arr[i] == arr[j]){
//                 res.push(arr[j])
//             }
//             console.log(res)
//         }
            
//     }
//     // return hasil
//   }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1

  function cariModus(arr) {
	var modus = 0;
	var muncul = 0;
	for (var i = 0; i < arr.length; i++) {
		var times = 0;
		for (var j = 0; j < arr.length; j++) {
			if (arr[i] === arr[j] && i !== j) {
				times++;
			}
		}
		if (times > muncul) {
			muncul = times;
			modus = arr[i];
		} else if (times === arr.length - 1) {
			modus = -1;
		}
		if (modus === 0) {
			modus = -1;
		}
	}
	return modus;
}