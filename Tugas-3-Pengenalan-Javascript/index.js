// soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var sliceWordOne = pertama.substring(0,4)
var sliceWordTwo = pertama.substring(12,18)
var sliceWordThree = kedua.substring(0,7)
var sliceWordFour = kedua.substring(8,18)
console.log(sliceWordOne + " " + sliceWordTwo +  " " + sliceWordThree + " " + sliceWordFour.toUpperCase())

// soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var wordOne = Number(kataPertama)
var wordTwo = Number(kataKedua)
var wordThree = Number(kataKetiga)
var wordFour = Number(kataKeempat)
console.log(wordOne + (wordTwo * wordThree) + wordFour)

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(14, 19);
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(24, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);