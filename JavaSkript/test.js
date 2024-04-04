/*const array = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c']
for (let i = array.length; i > 0; i--) {
    console.log(array[i - 1])
}*/

/*while (result < 7) {
    console.log(result)
    result++
}*/
/*while (result.length < 10) {
    const value = prompt('Enter')
    if (value.length === 0) {
        break
    }
    result = result + value
    console.log(result)
}*/

/*let health = 0
do {
    health++
    console.log(health)
} while (health < 100)*/

//const arr = ['a', 'b', 'c', 'd']
/*for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}*/

/*for (let  letter of arr) {
    console.log('Letter: ', letter)
}*/

/*const user = {
    name: 'Avet',
    age: 25,
    country: 'Russian Federation',
    isMarried: false
} 
for (let key in user) {
    if (key === 'country') {
        break
    }
    console.log(key, user[key])
}*/

/*const array = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}*/

/*const input = prompt('Введите число:')
const number = Number(input)

if (!isNaN(number) && number >= 0  && number <= 10) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${i*number}`)
    }
}*/

/*const input = prompt('Введите число:')
const number = Number(input)

if (!isNaN(number) && number >= 0 && number <= 1) {
        console.log(`${number} + ${i} = ${i+number}`)
    }*/

/*const input = prompt('Введите число:')
const number = Number(input)

if (number < 0) {
    console.log('Число отрицательное')
} else {
    console.log('Число не является отрицательным')
}*/

/*let string = prompt('Введите строку')
let length = string.length
console.log('Длина строки: ', length)*/

/*let string = prompt('Введите сроку:')
let lastChar = string [string.length - 1]
console.log('Последний символ строки: ', lastChar)*/

/*const input = prompt('Введите число: ')
const number = Number(input)
for (number)*/


/*function calculateAndNumber(initialValue) {
    let x = initialValue;
    x = x + 100;
    x = x / 5;

    return x
}

const result = calculateAndNumber(3994)
console.log(result)*/

/*function calculateCircle(newCircle) {
    const square = 3.14 * newCircle ** 2
    return square
}

const result = calculateCircle(5)
console.log(result)*/

/*function createHTMLElement(tag = 'button', text = 'send', id) {
    const element = document.createElement(tag);
    if (id) {
        element.id = id
    }
    element.innerText = text;

    return element;
}


const h1Element = createHTMLElement('h1', 'just text')
//console.log(h1Element)
document.body.appendChild(h1Element)
const element = createHTMLElement()
document.body.appendChild(element);*/

/*function logArgsToConsole() {
    //console.log(arguments)
    if (!arguments.length) {
        return
    }
    for (let argument of arguments) {
        console.log(argument)
    }
    console.log('not any arguments')
}

logArgsToConsole(1, 2, 8, 35, 124)*/

/*const sayHello = function() {
    console.log('hello')
}*/

//const sayBye = () => 5

//const brokenLinks = ['vk', 'youtube', 'facebook']


/*const fixLinksArray = (linksArray) => {
    const correctLinks = []
    linksArray.forEach(brokenLink => {
        const fixedLink = 'https://' + brokenLink + '.com'
        correctLinks.push(fixedLink)
    })
    return correctLinks
}

console.log(fixLinksArray(brokenLinks))*/


/*function myFunction(params) {
    console.log(this)
}
myFunction()*/

/*const item = {
    tittle: "Phone",
    fullPrice: 1567,
    calculatePrice(discountPercent = 0) {
        console.log(this.fullPrice - discountPercent/100 * this.fullPrice)
    }
}

item.calculatePrice(50)*/

/*function calcDiscount(age) {
    if (age => 77) {
        console.log(this.price / 2)
    } else {
        console.log(this.price)
    }
}

const item = {tittle: "Phone", price: 3000}
calcDiscount.call(item, 77)*/

/*function CreateItem(tittle, price) {
    this.tittle = tittle
    this.price = price
}

const item1 = new CreateItem("Phone", 100)
const item2 = new CreateItem("Phone", 3400)
const item3 = new CreateItem("Phone", 2340)
const item4 = new CreateItem("Phone", 67780)
console.log(item1, item2, item3, item4)*/

/*const object = {
    lastName: "Amalian",
    firstNames: ['Avetik', 'Andrew'],
    logFullNames1: function() {
        this.firstNames.forEach(function(name){
            console.log(`${this.lastName} ${name}`)
        }, this)
    },
    logFullNames2: function() {
        this.firstNames.forEach((name) => {
            console.log(`${this.lastName} ${name}`)
        })
    }
}

object.logFullNames1()*/

const item = {
    tittle: "Person",
    logTittle: function () {
        setTimeout((function() {
            console.log(`Product: ${this.tittle}`)
        }).bind(this))
    }
}

item.logTittle()