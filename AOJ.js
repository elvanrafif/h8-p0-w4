var snacks = [{
        name: 'Coklat',
        price: 15000
    },
    {
        name: 'Permen Gusus',
        price: 4000
    },
    {
        name: 'Pringloss',
        price: 16000
    },
]

// console.log(snacks[0], snacks[2])

for (i = 0; i < snacks.length; i++) {
    if (i % 2 == 0) {
        console.log(snacks[i])
    }
}


// ================================================

var name = "Tasya"
var jumlah = 0
for (i = 0; i< snacks.length; i++){
    console.log(name + ' Membeli ' + snacks[i].name + ' dengan harga '+ snacks[i].price)
    jumlah += snacks[i].price
}

console.log('uang yang dihabiskan '+name+' adalah '+jumlah)   

// ================================================

console.log(name + ' menghabiskan uang '+ jumlah +' untuk: ')
for(i = 0; i < snacks.length; i++){
    console.log([i+1]+'. ' + snacks[i].name)
}

// ================================================

var uangTasya = 50000
var pajak = 0.01 * jumlah
var date = '30-01-2020'
var struk = {}
var jenis = []

struk.namaToko = 'Cemil Mart'
struk.tanggal = date
    for (i=0 ; i<snacks.length ; i++){
        jenis.push(snacks[i].name)
    }
struk.items = jenis
struk.total = jumlah
struk.bayar = uangTasya
struk.kembalian = struk.bayar - jumlah - pajak
console.log(struk)

// ================================================
// PASS REFERENCES


var snacksInFebruary = []
for(i = 0; i < snacks.length; i++){
    snacksInFebruary.push({
        name : snacks[i].name,
        price : snacks[i].price - 2000
    })
}


console.log("\n ------------- JANUARY -------------")
console.log(snacks)
console.log("\n ------------- FEBRUARY -------------")
console.log(snacksInFebruary)


