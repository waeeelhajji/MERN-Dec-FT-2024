//? -- SCOPE
// var name = "bob"
function SayHi() {
    name = "alice"
    console.log(name)
    let exp = "hello"

}
console.log(exp)
// SayHi() //? alice
console.log(name) //? bob

//!----------------------------------------------------------
//? -- HOISTING --
// const LastName = "lastname"

// LastName = "firstName"
// console.log(LastName)
// primitive datatypes
// String
// Number
// Boolean
// Null / undefined


const Person = {
    name: "bob",
    favFood: "🍝",
    Age: 45
}

Person.name = "BOLT"
console.log(Person)
const animals = ["🫎", "🫏"]
animals.pop()
console.log(animals)

//!----------------------------------------------------------
//? -- HOISTING --

const Person = {
    name: "bob",
    favFood: "🍝",
    Age: 45
}

var FirstName = Person.name
var FavoriteFood = Person.favFood
console.log(FirstName, FavoriteFood)

const { name, favFood } = Person
console.log(name, favFood)

const animalss = ["🫎", "🫏", "🦁", "🐴"]
const [secondeAnim, Helmi, , LastAni] = animalss
console.log(secondeAnim, Helmi, LastAni)



//~ REST ---- SPREAD

const a = [10, 20, 30]
//pass by reference and pass by value
const b = [...a]

a.push(10000)


console.log(a)
console.log(b)


// ?------------- ARROW FUNCTION

//ES5
function Hello() {
    return "HELLO Again"
}
const Hello = function () {
    return "HELLO from Arrow fun"
}

//ES6
const Hello = () => {
    return "HELLO from Arrow fun"
}

Hello()

const Hello = () => "HELLO from Arrow fun";

const num = 18

if (num > 20) {
    console.log("You can pass")
} else {
    console.log("go back when you are more older")
}

num > 20 ? console.log("You can pass") : console.log("go back when you are more older")






