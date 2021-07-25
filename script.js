let birthday2 = 3
if ( birthday2 === 3){
    console.log("Happy birthday!")
} else if ( birthday2 < 3 ){
    console.log("ещё рано")
} else if ( birthday2 > 3 ){
    console.log("уже поздно")
}


let a10 = 2
let b5 = 1
let c = 1
if ( a10 === b5 && b5 === c ){
    console.log("все равны")
} else if ( a10 !== b5 || b5 !== c || c !== a10 ){
    console.log("не равны")
}


let light = "green"
if ( light === "green" ){
    console.log("можете ехать")
} else if ( light === "yellow"){
    console.log("немного подождите")
} else if( light === "red"){
    console.log("остановитесь!")
} else {
    console.log("неизвестно")
}


let today = 3
let birthday = 1
if ( today === birthday){
    console.log("Happy Birthday!")
} else {
    console.log("Not today")
}


console.log( Math.random() * 200 ) // or
console.log( Math.round(Math.random() * 200 ))


let age2 = 45
if ( age2 < 18){
    console.log(`вы должны быть старше 18`)
} else if ( age2 > 18 ){
    console.log("добро пожаловать!")
}


let num2 = 4.98271
console.log(Math.ceil(num2))
console.log(Math.floor(num2))
console.log(Math.round(num2))


let numStr ="33"
let result4 = Number(numStr)
let result5 = parseInt(numStr)
let result6 = +numStr
console.log(typeof result4)
console.log(typeof result5)
console.log(typeof result6)


let  strNum = 11
let result = strNum.toString()
let result2 = String(strNum)
let result3 = strNum + " "
console.log(typeof result)
console.log(typeof result2)
console.log(typeof result3)


a10 = 3**10
console.log( a10 )


let a9 = 77
console.log(Math.sqrt(a9))


let a8 = 19
let b4 = 2
if ( a8 % b4 === 0){
    console.log(`Делится ${a8/b4}`)
} else {
    console.log(`Делится с остатком ${a8%b4}`)
}


let a7 = 60
if ( a7 >= 40 && a7 <= 60){
    console.log("верно")
} else {
    console.log("Неверно")
}


let num = 52
if( num === 110 ){
    console.log("Верно")
} else{
    console.log("Неверно")
}


let time = 16
if ( time >=0 && time <=15){
    console.log("Первая четверть")
} else if( time >=15 && time <=30 ){
    console.log("Вторая четверть")
} else if ( time >= 30 && time <= 45 ){
    console.log("Третья четверть")
} else if ( time >=45 && time <= 60 ){
    console.log("Четвёртая четверть")
} else {
    console.log("Неверное число")
}


let age = 95
if ( age >= 10 && age <=20 ){
    console.log(`Мне ${age} лет`)
} else if ( age % 10 === 1 || age === 1){
    console.log(`Мне ${age} год`)
} else if( age % 10 >= 2 && age % 10 <= 4 || age >= 2 && age <= 4 ){
    console.log(`Мне ${age} года`)
} else {
    console.log(`Мне ${age} лет`)
}


let a6 = "12345"
if ( a6[0] === "1" || a6[0] === "2" || a6[0] === "3" ){
    console.log("Da")
} else {
    console.log("Net")
}


let day = 32
if( day >= 1 && day <= 10 ){
    console.log("First decade!")
} else if ( day >= 11 && day <= 20 ){
    console.log("Second decade!")
} else if ( day >=21 && day <= 31){
    console.log("Third decade!")
} else {
    console.log("There is no such decade in a month!")
}


let month = 4
if ( month >= 3 && month <= 5 ){
    console.log("Spring!")
} else if( month >= 6 && month <= 8 ){
    console.log("Summer!")
} else if ( month >=9 && month <= 11 ){
    console.log("Autumn!")
} else if ( month === 1 || month === 2 || month === 12 ){
    console.log("Winter!")
} else {
    console.log("NO MONTH!")
}


let a5 = 7
let b3 = 5
if ( a5 > 4 && b3 < 10 || b3 >= 7 && b3 < 17 ){
    console.log("Верно")
} else{
    console.log("Неверно")
}


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