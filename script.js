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