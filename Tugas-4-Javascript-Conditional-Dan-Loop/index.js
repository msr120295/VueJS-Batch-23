//soal 1
var nilai = 70
if (nilai >= 85) {
    console.log('A')
} else if(nilai >= 75) {
    console.log('B')
} else if (nilai >= 65) {
    console.log('C')
} else if (nilai >= 55) {
    console.log('D')
} else {
    console.log('E')
}

// //soal 2
var tanggal = 12;
var bulan = 2;
var tahun = 1995;
switch (bulan) {
    case 1:
    console.log(tanggal + ' januari ' + tahun)
    break;
    case 2:
    console.log(tanggal + ' februari ' + tahun)
    break;
    case 3:
    console.log(tanggal + ' maret ' + tahun)
    break;
    case 4:
    console.log(tanggal + ' april ' + tahun)
    break;
    case 5:
    console.log(tanggal + ' mei ' + tahun)
    break;
    case 6:
    console.log(tanggal + ' juni ' + tahun)
    break;
    
    default:
    console.log('Bulan tidak ditemukan')
    break;
}

// //soal 3
var i, j, output = ' '
for(i=0; i < 5; i++) {
    output += " # "
    console.log(output);

}

//soal 4
var m = 10
for (i = 0; i <= m; i++) {
    if(i == 1 || i == 4 || i == 7 || i == 10) {
        console.log(i + ' - I Love programming')
    } else if(i == 2 || i == 5 || i == 8) {
        console.log(i + ' - I Love javascript')
    } else if (i == 3 || i == 6 || i == 9) {
        console.log(i + ' - I Love vuejs')
    }
    console.log(' ')
}