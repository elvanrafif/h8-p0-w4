function saleCoklat(list, money) {
	//implementasikan function dibawah ini
	
	var tmp
	for (var i = 0; i < list.length-1; i++) {
		for (var j = 0; j < list.length-1-i; j++) {
			if (list[j][1] < list[j+1][1]) {
				tmp = list[j]
				list[j] = list[j+1]
				list[j+1] = tmp
			}
		}
	}
	// return list
	
	var shoppingCart = []
	while (money >= list[list.length-1][1]) { // INFINITE LOOP
		for (var i = 0; i < list.length; i++) {
			if (money >= list[i][1]) {
				money -= list[i][1]
				shoppingCart.push(list[i][0])
			}
		}
	}
	// return shoppingCart

	var checkout = []
	for (j = 0; j < shoppingCart.length; j++) {
		var alreadyChecked = -1
		for (k = 0; k < checkout.length; k++) {
			if (shoppingCart[j] === checkout[k][0]) {
				alreadyChecked = k
			}
		}
		if (alreadyChecked === -1) {
			checkout.push([shoppingCart[j], 1])
		} else {
			checkout[alreadyChecked][1]++
		}
	}
	return checkout
}

console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		100000
	)
);
//[ [ 'Hersheys', 1 ], [ 'Toblerone', 1 ] ]

console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		200000
	)
);
/**
 * 
 * [
  [ 'Hersheys', 1 ],
  [ 'Toblerone', 1 ],
  [ 'Cadbury', 1 ],
  [ 'Waltz', 1 ],
  [ 'Ferrero Rocher', 1 ]
]
 * 
 */

console.log(
	saleCoklat(
		[
			['Ferrero Rocher', 25000],
			['Cadbury', 38000],
			['Hersheys', 53500],
			['Waltz', 36000],
			['Toblerone', 42000],
			['Guylian', 13000]
		],
		500000
	)
);

/**
 *
[
  [ 'Hersheys', 3 ],
  [ 'Toblerone', 2 ],
  [ 'Cadbury', 2 ],
  [ 'Waltz', 2 ],
  [ 'Ferrero Rocher', 3 ],
  [ 'Guylian', 2 ]
]
 * 
 */

console.log(
	saleCoklat(
		[
			['Waltz', 25000],
			['Lindt', 30000],
			['Toblerone', 20000]
		],
		100000
	)
);

/**
 * 
[ [ 'Lindt', 1 ], [ 'Waltz', 2 ], [ 'Toblerone', 1 ] ]
 * 
 */