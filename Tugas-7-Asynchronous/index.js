//soal 1
// var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// readBooks(10000, books[0], (sisaWaktu) => {
//     readBooks(sisaWaktu, books[1], (sisaWaktu) => {
//         readBooks(sisaWaktu, books[2], (sisaWaktu) => {
//             readBooks(sisaWaktu, books[3], (sisaWaktu) => {
//                 console.log('program ends')
//             })
//         })
//     })
// })

//soal 2
var readBooks = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(10000, books[0])
    .then(res => readBooks(res, books[1])
        .then(res => {
            readBooks(res, books[2])
            .then(res => {
                readBooks(res, books[3])
            })
            .catch(e =>{
                throw new e
            })
        })
        .catch(e => {
            throw e
        })
    
    )
    .catch(e => {
        throw e
    })

