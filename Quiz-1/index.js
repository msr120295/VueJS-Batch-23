//soal 1
// masih belum yakin dengan cara ini !
function next_date(tanggal, bulan, tahun) {
    var dateNow =  new Date(tahun, bulan, tanggal)
    var dateFuture = new Date()
    dateFuture.setDate(dateNow.getDate() + 1)
    return dateFuture.toDateString()
}

console.log(next_date(12, 02, 1995))

//soal 2
function jumlah_kata(param) {
    return param.split(' ')
    .filter(function res () {
        return res != ''
    }).length
}

var kalimat_1 = " Halo nama saya Mochamad Salman"
console.log(jumlah_kata(kalimat_1))