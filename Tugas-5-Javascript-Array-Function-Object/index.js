//soal 1
var daftarBuah = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
for (let i = 0; i < daftarBuah.length; i++) {
    daftarBuah.sort()
    console.log(daftarBuah[i])
}
//soal 2
function introduce(param) {
    return `Nama saya ${param.name}, umur saya ${param.age} tahun, alamat saya di ${param.address}, dan saya punya hobby yaitu ${param.hobby}`;
}
var data = {name : "Mochamad Salman" , age : 26 , address : "Jl. Pasir Impun" , hobby : "Gaming and Learn to Code" }
 
var perkenalan = introduce(data)
console.log(perkenalan)

//soal 3
function hitung_huruf_vokal(param) {
    const hitung = param.match(/[aeiou]/gi).length
    return hitung
}
var hitung_1 = hitung_huruf_vokal("Mochamad")
var hitung_2 = hitung_huruf_vokal("Salman")

console.log(hitung_1 , hitung_2)

//soal 4
function hitung(param) {
    const tempScore = (2 * param) - 2
    return tempScore
}
console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8