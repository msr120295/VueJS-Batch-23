//soal 1
const luasPP = (panjang, lebar) => {
    return panjang * lebar
}

const kelilingPP = (panjang, lebar) => {
    let tempValue = panjang + lebar
    tempValue * 2
    return tempValue
}

console.log(luasPP(2, 10))
console.log(kelilingPP(2,10))

//soal 2
const newFunction = (firstName, lastName) => {
    const firstNm = firstName
    const lastNm = lastName
    const nameOutput = () => {
        console.log(`${firstName} ${lastName}`)
    }
    return {
        firstNm,
        lastNm,
        nameOutput
    }
}  
newFunction("William", "Imoh").nameOutput() 

//soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }
  const {firstName, lastName, address, hobby} = newObject
  console.log(firstName, lastName, address, hobby)

//soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)


//soal 5
const planet = "earth" 
const view = "glass" 
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`
console.log(before)