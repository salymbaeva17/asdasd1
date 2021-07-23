let a4 = 0
let b2 = 5
if ( a4 <= 0 && b2 >=5){
    let result = a4 + b2
    console.log(result)
} else {
    let result = a4 - b2
    console.log(result)
}


let a3 = 6
if (a3 === 3 || a3 === 7){
    a3 = a3 + 7
    console.log(a3)
} else{
    a3 = a3 / 10
    console.log(a3)
}


let a2 = 6
if ( a2 > 1 && a2 < 9){
    console.log("Верно")
} else {
    console.log("Неверно")
}


const s = s => {
    if (typeof s === "string") {
        return "String"
    } else if (typeof s === "boolean") {
        return "Boolean"
    } else if (typeof s === "number") {
        return "Number"
    }
}
console.log(s(65))


let a = 10
let b = 2
if (a % b === 0) {
    console.log("Четное число")
} else {
    console.log("Нечетное число")
}


let number = 45
if (number % 2 === 0) {
    console.log("Четное число")
} else {
    console.log("Нечетное число")
}