function task26(str) {
    return str.lastIndexOf("a")
}

console.log(task26("Aurora"))
console.log(task26("Elsa"))
console.log(task26("Anastasia"))
console.log(task26("Egor"))


function task27(str) {
    return str.indexOf("о")
}
console.log(task27("Потап"))
console.log(task27("Аврора"))
console.log(task27("Иоганн"))
console.log(task27("озеро"))
console.log(task27("Егор"))


function task28(str) {
    let substr1 = str.substr(2, 5)
    return substr1
}
function task28_1(str) {
    let substring1 = str.substring(2, 7)
    return substring1
}
function task28_2(str) {
    let slice1 = str.slice(2, 7)
    return slice1
}
console.log(task28("seveniybgg divide seven"))
console.log(task28_1("seveniybgg divide seven"))
console.log(task28_2("seveniybgg divide seven"))
console.log(task28("Hellhbkjno, how are you?"))
console.log(task28_1("Hellhbkjno, how are you?"))
console.log(task28_2("Hellhbkjno, how are you?"))
console.log(task28("sevenhbkug plus eight"))
console.log(task28_1("sevenhbkug plus eight"))
console.log(task28_2("sevenhbkug plus eight"))


function task29(str) {
    return str.replace(/-/g, "/")
}
console.log(task29("17-02-2021"))


function task30(str) {
    return str.includes("л") ? "Да" : "Нет"
}
console.log(task30("Максимально ужасно"))
console.log(task30("Как ты поживаешь?"))


function task31(str) {
    return str[0] === str[str.length - 1] ? "Совпадает" : "Не совпадает"
}
console.log(task31("Максимально ужасно, переделывай"))
console.log(task31("Apkosjf jngdnjnvjaA"))


function task32(today, birthday) {
    return today === birthday ? "Happy Birthday!" : "Not Today!"
}
console.log(task32(7, 1))


function task33(age) {
    return age < 18 ? "вы должны быть старше 18" : age > 18 ? "добро пожаловать!" : "не разрешено!"
}
console.log(task33(12))
console.log(task33(18))
console.log(task33(20))


function task34(light) {
    return light === "green" ? "можете ехать" : light === "yellow" ? "немного подождите" : light === "red" ? "остановитесь" : "неизвестно"
}
console.log(task34("green"))
console.log(task34("red"))
console.log(task34("yellow"))
console.log(task34("blue"))


function task35(str) {
    return +(str[0]) + +(str[1]) + +(str[2])

}
console.log(task35('617'))
console.log(task35('456'))
console.log(task35('123'))


function finalValue(exam, projects){
    if( exam > 90 || projects > 10 ){
        return "100"
    } else if ( exam > 75 && projects >= 5 ){
        return "90"
    } else if( exam > 50 && projects >= 2 ){
        return "75"
    }
    return "0"
}
console.log(finalValue(100, 11))
console.log(finalValue(95, 11 ))
console.log(finalValue(55, 3))
console.log(finalValue(55, 0))
console.log(finalValue(20, 2))
console.log(finalValue(99, 0))
console.log(finalValue(10, 15))


function num1(a, b, c, d){
    return Math.min(a, b, c, d)
}
console.log(num1(1, -9, 0,62))
console.log(num1(67, 24, 55, 100))


function num(n){
    return String(n).length
}
console.log(num(18))
console.log(num(7))
console.log(num(129))


function randomNum2(n){
    return Math.floor(Math.random()  * n ** 2 - n )
}
console.log(randomNum2(18))
console.log(randomNum2(9))
console.log(randomNum2(90))


function randomNum(n){
    return Math.round(Math.random()  * n - `${n / 2}` )
}
console.log(randomNum(18))
console.log(randomNum(9))
console.log(randomNum(90))


function root(num){
    return num * num
}
console.log(root(6))
console.log(root(13))
console.log(root(20))


function index(str){
    return str.charAt(str.length - 1)
}
console.log(index("Hello everyone"))
console.log(index("Hi, how r u?"))


function string(str){
    return str.length
}
console.log(string("Hello everyone"))
console.log(string("Hi, how r u?"))


function multiplicity1(num){
    return num % 5 === 0
}
console.log(multiplicity1(100))
console.log(multiplicity1(19))


function multiplicity(num) {
    return num % 5 === 0;
}
console.log(multiplicity(55))
console.log(multiplicity(25))
console.log(multiplicity(9))


function comparisonNum(a, b) {
    if (a > b) {
        return `${a} больше ${b}`
    } else if (a < b) {
        return `${b} больше ${a}`
    }
    return "Они равны"
}

console.log(comparisonNum(3, 1))
console.log(comparisonNum(45, 65))
console.log(comparisonNum(0, 0))


function type(value) {
    return typeof value
}

console.log(type("Trump"))
console.log(type(13))
console.log(type(false))


function greeting(name) {
    return `Hello my dear ${name}`
}

console.log(greeting("Ivan"))
console.log(greeting("Aitolkun")) // фактическое значение которое передается в функцию называется  ее аргументом
console.log(greeting("Maria")) // имя по которому вы получаете фактич значение --- параметр


function product(a, b) {
    return a * b
}

console.log(product(3, 7))
console.log(product(8, 6))
console.log(product(9, 3))


let str20 = "Максимально"
let half = str20.length / 2
if (str20.indexOf("л") > half) {
    console.log("Вторая половина")
} else {
    console.log("Первая половина")
}


let str19 = "АаааааА"
if (str19[0] === str19[6]) {
    console.log("Совпадает")
} else {
    console.log("Не совпадает")
}


let str18 = "AаааааА"
if (str18[0].indexOf("A") === str18.lastIndexOf("A")) {
    console.log("Совпадает")
} else {
    console.log("Не совпадает")
}


let str17 = "Максимально Ужасно"
if (str17.includes("в")) {
    console.log("Да")
} else {
    console.log("Нет")
}


let str16 = "17-02-2021"
let array9 = str16.replace("17-02-2021", "31/12/2025")
console.log(array9)


let str15 = "aaa bbb ccc"
let b6 = str15.substr(4, 4)
console.log(b6)
let b7 = str15.substring(4, 7)
console.log(b7)
let b8 = str15.slice(4, 7)
console.log(b8)


let str14 = "Максимально Ужасно"
console.log(str14.indexOf("о"))


let str13 = "Максимально Ужасно"
console.log(str13.lastIndexOf("а"))


let str12 = "Максимально Ужасно"
if (str12.includes("а") >= 1) {
    console.log("встречается более 1 раза")
} else {
    console.log("встречается менее одного раза")
}


let str11 = "Максимально Ужасно"
console.log(str11.indexOf("Ужасно"))


let str9 = "Максимально"
let str10 = "Ужасно"
let array8 = str9.concat(" ", str10)
console.log(array8)


let str8 = "Максимально Ужасно"
let array7 = str8.charAt(12)
console.log(array7)


let str7 = "Максимально Ужасно"
let array6 = str7.slice(5, 18)
console.log(array6)


let str6 = "Максимально Ужасно, переделывай"
let array5 = str6.split(" ")
console.log(array5)


// let str5 = 'Максимально Ужасно'
// let array4 = str5.split("")
// console.log(array4)
//
//
// let str4 = "максимально УЖАСНО"
// let array3 = str4.split(" ")
// console.log(array3[0].toUpperCase())
//
//
// let  str3 = "Максимально УЖАСНО"
// let array2 = str3.split(" ")
// console.log(array2[1].toLowerCase())
//
//
// let str2 = "Nevis ITDB TECH"
// let array = str2.split(" ")
// console.log(array[0].length)
//
//
// let str = "apple"
// if ( str[0] === "a"){
//     console.log("Da")
// } else {
//     console.log("Net")
// }
//
//
// let num3 = "123456"
// if ( +num3[0] + +num3[1] + +num3[2] === +num3[3] + +num3[4] + +num3[5]){
//     console.log("да")
// } else {
//     console.log("нет")
// }
//
//
// let numStr2 = "123"
// let result7 = +numStr2[0] + +numStr2[1] + +numStr2[2]
// console.log(result7)
//
//
// let birthday2 = 3
// if ( birthday2 === 3){
//     console.log("Happy birthday!")
// } else if ( birthday2 < 3 ){
//     console.log("ещё рано")
// } else if ( birthday2 > 3 ){
//     console.log("уже поздно")
// }
//
//
// let a10 = 2
// let b5 = 1
// let c = 1
// if ( a10 === b5 && b5 === c ){
//     console.log("все равны")
// } else if ( a10 !== b5 || b5 !== c || c !== a10 ){
//     console.log("не равны")
// }
//
//
// let light = "green"
// if ( light === "green" ){
//     console.log("можете ехать")
// } else if ( light === "yellow"){
//     console.log("немного подождите")
// } else if( light === "red"){
//     console.log("остановитесь!")
// } else {
//     console.log("неизвестно")
// }
//
//
// let today = 3
// let birthday = 1
// if ( today === birthday){
//     console.log("Happy Birthday!")
// } else {
//     console.log("Not today")
// }
//
//
// console.log( Math.random() * 200 ) // or
// console.log( Math.round(Math.random() * 200 ))
//
//
// let age2 = 45
// if ( age2 < 18){
//     console.log(`вы должны быть старше 18`)
// } else if ( age2 > 18 ){
//     console.log("добро пожаловать!")
// }
//
//
// let num2 = 4.98271
// console.log(Math.ceil(num2))
// console.log(Math.floor(num2))
// console.log(Math.round(num2))
//
//
// let numStr ="33"
// let result4 = Number(numStr)
// let result5 = parseInt(numStr)
// let result6 = +numStr
// console.log(typeof result4)
// console.log(typeof result5)
// console.log(typeof result6)
//
//
// let  strNum = 11
// let result = strNum.toString()
// let result2 = String(strNum)
// let result3 = strNum + " "
// console.log(typeof result)
// console.log(typeof result2)
// console.log(typeof result3)
//
//
// a10 = 3**10
// console.log( a10 )
//
//
// let a9 = 77
// console.log(Math.sqrt(a9))
//
//
// let a8 = 19
// let b4 = 2
// if ( a8 % b4 === 0){
//     console.log(`Делится ${a8/b4}`)
// } else {
//     console.log(`Делится с остатком ${a8%b4}`)
// }
//
//
// let a7 = 60
// if ( a7 >= 40 && a7 <= 60){
//     console.log("верно")
// } else {
//     console.log("Неверно")
// }
//
//
// let num = 52
// if( num === 110 ){
//     console.log("Верно")
// } else{
//     console.log("Неверно")
// }
//
//
// let time = 16
// if ( time >=0 && time <=15){
//     console.log("Первая четверть")
// } else if( time >=15 && time <=30 ){
//     console.log("Вторая четверть")
// } else if ( time >= 30 && time <= 45 ){
//     console.log("Третья четверть")
// } else if ( time >=45 && time <= 60 ){
//     console.log("Четвёртая четверть")
// } else {
//     console.log("Неверное число")
// }
//
//
// let age = 95
// if ( age >= 10 && age <=20 ){
//     console.log(`Мне ${age} лет`)
// } else if ( age % 10 === 1 || age === 1){
//     console.log(`Мне ${age} год`)
// } else if( age % 10 >= 2 && age % 10 <= 4 || age >= 2 && age <= 4 ){
//     console.log(`Мне ${age} года`)
// } else {
//     console.log(`Мне ${age} лет`)
// }
//
//
// let a6 = "12345"
// if ( a6[0] === "1" || a6[0] === "2" || a6[0] === "3" ){
//     console.log("Da")
// } else {
//     console.log("Net")
// }
//
//
// let day = 32
// if( day >= 1 && day <= 10 ){
//     console.log("First decade!")
// } else if ( day >= 11 && day <= 20 ){
//     console.log("Second decade!")
// } else if ( day >=21 && day <= 31){
//     console.log("Third decade!")
// } else {
//     console.log("There is no such decade in a month!")
// }
//
//
// let month = 4
// if ( month >= 3 && month <= 5 ){
//     console.log("Spring!")
// } else if( month >= 6 && month <= 8 ){
//     console.log("Summer!")
// } else if ( month >=9 && month <= 11 ){
//     console.log("Autumn!")
// } else if ( month === 1 || month === 2 || month === 12 ){
//     console.log("Winter!")
// } else {
//     console.log("NO MONTH!")
// }
//
//
// let a5 = 7
// let b3 = 5
// if ( a5 > 4 && b3 < 10 || b3 >= 7 && b3 < 17 ){
//     console.log("Верно")
// } else{
//     console.log("Неверно")
// }
//
//
// let a4 = 0
// let b2 = 5
// if ( a4 <= 0 && b2 >=5){
//     let result = a4 + b2
//     console.log(result)
// } else {
//     let result = a4 - b2
//     console.log(result)
// }
//
//
// let a3 = 6
// if (a3 === 3 || a3 === 7){
//     a3 = a3 + 7
//     console.log(a3)
// } else{
//     a3 = a3 / 10
//     console.log(a3)
// }
//
//
// let a2 = 6
// if ( a2 > 1 && a2 < 9){
//     console.log("Верно")
// } else {
//     console.log("Неверно")
// }
//
//
// const s = s => {
//     if (typeof s === "string") {
//         return "String"
//     } else if (typeof s === "boolean") {
//         return "Boolean"
//     } else if (typeof s === "number") {
//         return "Number"
//     }
// }
// console.log(s(65))
//
//
// let a = 10
// let b = 2
// if (a % b === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }
//
//
// let number = 45
// if (number % 2 === 0) {
//     console.log("Четное число")
// } else {
//     console.log("Нечетное число")
// }