/*Create a business name generator by combining list of
 adjectives and shop name and another words

 Adjectives:
 Crazy
 Amazing
 Fire

 Shop name
 Engine
 Foods
 Garments

 Another Words
 Bros
 LImited
 Muh


 */

console.log("Business name generator")

let first
let mid
let last

function getRandom(...args) {
    return args[Math.floor(Math.random() * args.length)];
}   // To use getRandom function we have made this,   chatgpt


function adjectives(){
    let a="Crazy"
    let b="Amazing"
    let c="Fire"
     first=getRandom(a,b,c)
}

function Shop(){
    let a="Engine"
    let b="Foods"
    let c="Garments"
     mid=getRandom(a,b,c)

}

function anotherword(){
    let a="Bros"
    let b="Limited"
    let c="Muh"
     last=getRandom(a,b,c)

}

adjectives()
Shop()
anotherword()
console.log(first+" "+mid+" "+last)

console.log(`Business Name is ${first} ${mid} ${last}`)
