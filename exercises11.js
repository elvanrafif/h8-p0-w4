function shoppingTime(memberId, money) {
    var obj = {}
    var jenis = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Unikloh', 175000],
        ['Casing Handphone', 50000],
    ]
    if (memberId == '' || memberId == undefined && money == undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    if (money < 50000) {
        return 'Mohon maaf, uang tidak cukup'
    }

    obj.memberId = memberId
    obj.money = money
    obj.listPurched = []
    for (i = 0; i < jenis.length; i++) {
        if (money >= jenis[i][1]) {
            obj.listPurched.push(jenis[i][0])
            money -= jenis[i][1]
        }
    }
    obj.changeMoney = money
    return obj


}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
// //{ memberId: '1820RzKrnWn08',
// // money: 2475000,
// // listPurchased:
// //  [ 'Sepatu Stacattu',
// //    'Baju Zoro',
// //    'Baju H&N',
// //    'Sweater Uniklooh',
// //    'Casing Handphone' ],
// // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//   { memberId: '82Ku8Ma742',
//   money: 170000,
//   listPurchased:
//    [ 'Casing Handphone' ],
//   changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja