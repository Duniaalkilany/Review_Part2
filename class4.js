//function :

console.log(typeof console.log)//function 
console.log(typeof console)//object 
console.log(console)


//function if your age <=15 alert or console (you are not allowed to use this app )//if >15 log userName of the user and the age


function checkAge (age , userName){
if (age <=15){
console.log('you are not allowed to use this app')
}else{
console.log(`Name : ${userName} , Age : ${age}`)
}
}


checkAge(14, 'Basel')

checkAge(20, 'dunia')


checkAge()//Name: undefined , Age: undefined

//write function to generate range of years (start-end)

function generateYears(start, end, exclude){
for (let i = start ; i <= end ; i++){
    if (i===exclude){
        continue
    }else{console.log(i)}
}
}

generateYears(2010, 2020, 2018)
/*if i want to excelude 2018
using continue 
we said loop control is break ===stop the loop and continue mean exclude this iteration and continue
*/
//write a function to calculate sum of num1//num2//return the value

function calcSum (num1 ,num2){
return num1+num2

console.log(num1)//unreachable
}
let result=calcSum(10,20)
console.log(result)

function calculation(var1 ,var2){
let sum=var1+var2
return
}

console.log(calculation(10,20))//undefined
console.log(calculation(10,20)+20)//NAN


function printNum(start, end){
for(let i =start ; i<= end ; i++){
if (i===15){
    return
}
console.log(i)
}
}

printNum(10, 20)
//ES6 Directly assign default values to parameters 
function printName(userName='Unknown'){
    console.log(`name: ${userName}`)
}

printName()
printName('dunia')

//rest parameters 
//unkonown number of parameters so arguments 
//deal with the input arguments as array 

function calc (...num){
console.log (Array.isArray(num))
console.log(num)
let result=0
for(let i=0; i<num.length;i++){
 result+=num[i]
}
console.log(`result=${result}`)
}
calc(10, 20, 30, 40)


// `Hello ${userName}, Your Age  Is  ${age}, You Are Not Available For Hire`
//ternary operator 

function randomPrint(...input){
    for(let i = 0 ; i<input.length ; i++){
typeof input[i]==='string'
? (userName=input[i])
: typeof input[i]==='number'
? (userAge= input[i])
:input[i]===true
?userState='You Are Available For Hire'
:userState='You Are Not Available For Hire'
    }
console.log(`hi ${userName} , your Age : ${userAge}, ${userState}`)
}

randomPrint(20, 'dunia', true)
randomPrint(false , 15 , 'dalia')


calculations(1,2)// i can access the named function before initialization 
function calculations(n1 ,n2){
console.log(n1+n2)
}
//the name of the function is not important 
//using with events
//using with onclick 
//using with setTimeOut function 
document.getElementById('show').onclick=function(){
    alert('clicked')
}

// setTimeout(function(){
//   document.write('hi')
// },5000)


let userNames=['Dunia','Dalia','MANAR','Rawaa']

function checkName (array){
let newArray=[]
for (let i =0 ; i<array.length ;i++){
if (array[i].startsWith('D')){
    newArray.push(array[i])
}
}
console.log(newArray)
}


checkName (userNames)

//arrow : ES6 

/*

anonymous function ==> arraw function 


*/


let checkName2 = function (array){
    let newArray=[]
    for (let i =0 ; i<array.length ;i++){
        if (array[i].startsWith('D')){
            newArray.push(array[i])
        }
        }
        console.log(newArray)
}


checkName2 (userNames)



let checkName3=array=>{
    let newArray=[]
    for (let i =0 ; i<array.length ;i++){
        if (array[i].startsWith('D')){
            newArray.push(array[i])
        }
        }
        console.log(newArray)
}
checkName3(userNames)



/*
global _ local scope :
variable scope drama 
-iside function : local scope 
-outside function : global scope 
*/
let a= 1 
var b =2 
console.log(window.b)//any variable declared using var added to window object
console.log(window.a)//declared using let so not added to window object 

function checkValue(){
    let a = 10
    let b= 20
    console.log(`value if a from local ${a}`)//10
    console.log(`value if b from local ${b}`)//20
}
checkValue()
console.log(`value if a from global ${a}`)//1
console.log(`value if b from global ${b}`)//2


// BLOCK SCOPE 

let c = 10
if (1===1){
let c =20
console .log(`c inside block ${c}`)
}
console .log(`c outside block ${c}`)


var d= 100
if (1===1){
var d  =200
console .log(`d inside block ${d}`)
}
console .log(`d outside block ${d}`)

/*function block

var have function scope but do not have block scope */

var e = 300
function checkScope (){
    var e = 400
    console.log(`e local scope ${e}`)//400
}
checkScope ()
console.log(`e global scope ${e}`)//300


function parent(){
    let f = 30
    function child(){
        let f = 50
      console.log(`f from local ${f}`) 
    }
    child()//30
}
parent()

let myNums = [1, 2, 3, 4, 5, 6];



let addSelf = myNums.map(function (el, index, arr) {
    console.log(`current el=${el}`);
    console.log(`current index=${index}`);
    console.log(`current arr=${arr}`);
    console.log(`this=>${this}`);
  return el + el;
}, 10);


//Function 1 : 

//i want have new array each element+1

let newArray= myNums.map(function(el){
   return el+1
})

console.log(newArray)

//using 3 sways , i want new array each element = element+ element 
function doubleNumbers (el){
return el+el
}
let newMyNums=myNums.map(doubleNumbers)
console.log(newMyNums)

/* map using arrow function*/ 

let newMyNums2= myNums.map((el)=>{
return el+el
},10)
console.log(newMyNums2)


//push : :add to the end of array : edited at the array it self , return array length 

let animals=['Cat','Dog','Bird']

let newAnimals=animals.push('lion')

console.log(`animals:${animals}`)
console.log(`newAnimals:${newAnimals}`)

let alpa=[1,2,3,4]
let newAlpa=[]

for(let i =0 ; i < alpa.length ; i ++){
newAlpa.push(alpa[i]+alpa[i])
}
console.log(`newAlpa: ${newAlpa}`)

//

let string = 'dunia'

console.log(string.toUpperCase())
console.log(string)
//write function to swap charac from capital to small and vise versa

// let word ;

// function convertChar(word){
//     console.log(`word : ${word}`)
// for (let i = 0 ; i < word.length ; i++){
//     console.log(word[i])
// if (word[i].toUpperCase()===word[i]){
// word = word.replace(word[i],word[i].toLowerCase())
// console.log(word)
// }else{
//     word = word.replace(word[i],word[i].toUpperCase())
//     console.log(word)
// }
// }
// return word
// }

// console.log(convertChar('asMA'))

let word;

function swapChar(word){
    let ConvertedWord=''
for(let i =0 ; i < word.length; i++){
if (word[i].toUpperCase()===word[i]){
    ConvertedWord+=word[i].toLowerCase()
}else{
    ConvertedWord+=word[i].toUpperCase()
}
}
return ConvertedWord
}
console.log(swapChar('ASma'))
//swap using map 
//map is array method 
//split : from string to array 

let sentance = "Elzero Web School";

console.log(sentance.split(" "));//["Elzero","Web","School"]
console.log(sentance.split("e"));//["Elz","ro W","b School"]
console.log(sentance.split("l"));//["E","zero Web Schoo",""]
console.log(sentance.split("", 5))//["E","l","z","e","r"]
console.log(sentance.split(" ", 2))//["Elzero","Web"]

//swap using map 
/*

-from string to array use split 
-then do map 
-then from array to string use join()
*/
word= "ASma"
let convertWord=word.split('').map((ele)=>{
    if (ele.toUpperCase()===ele){
return ele.toLowerCase()
    }else {
        return ele.toUpperCase()
    }
}).join("")

console.log(`convertWord :${convertWord}`)


