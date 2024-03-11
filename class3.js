let discountInd = false
let price = 100
let discountAmount=30
let country = 'Jordan'
let studentInd = true


if (discountInd){
price-=discountAmount
console.log(price)
}else if (country = 'Jordan'){
if (studentInd){
    price-=discountAmount+30//100-60=40
    console.log(price)
}else {
    price-=discountAmount+10
    console.log(price)
}
}else{
    console.log(price)
}

//Ternary Operator (جملة if  المختصرة):
// condition ? if true : if false 

let Gender= 'Male'


if (Gender==='Male'){
console.log('Mr')
}else{
console.log('Mrs')
}

//using ternary operator : 
Gender==='Male'? console.log('Mr'):console.log('Mrs')

let result= Gender==='Male'? 'Mr':'Mrs'

console.log(`result : ${result}`)

document.write(`<h1> result : ${result}<h1/>`)
//using the ternary if have if / else if 

let age = 20

if (age < 20 ){
console.log('age less than 20')
}else if (age> 20 && age< 60){
console.log('between 20 and 60')
}else if (age> 60 ){

}else {
    console.log('unknown')
}

//Ternary if 

age <= 20 
? console.log('age less than or equal 20')
:age> 20 && age< 60
?console.log('between 20 and 60')
:age> 60
?console.log('greater than 60')
:console.log('unknown')


// if (indicator=false){
// price+=100
// }else if (indicator=true){
// price+=200
// }else {
// price+=500
// }

// console.log(price)

// if (indicator= true){
//     if(country='jordan'){
//         console.log('nestaed if ')
//     }else {
//         console.log('nested')
//     }
// }else {
//     console.log(`price : ${price} `)
// }

/*
 او لا اذا في ديسكاونت 
 اذا في اعملي العمليه 
 السيناريو التاني اذا ارني جوا اردني اا طالب 
 اذا طالب dis اعلا ب 30
 اذا لا اعلا ب 10 
 ما في dis و الشخص مو تردني 
 السعر بدون خصم 

*/

/*

Control flow : 
if 
nested if 
ternary operator
switch 
*/

let day = 2

switch (day){
    case 1 :
        console.log(day)
        break
    case "2" : 
        console.log(day)
        break
    case 3 :
        console.log(day)
        break
    default:
        console.log(8)
}



let string = "dunia123";
let string2 = "hello";

switch(string){
    case "mkl" :
        console.log('not dunia')
        break;
    case "hello" :
        console.log('hello')
        break;
    case "dunia123":
    case "hello":
        console.log("matched")
         break ; 
}
    
    let myFriend =["sara","tasneem","dalia","manar"]

    for (let i = 0 ; i < 4 ; i++){
        console.log(myFriend[i])
    }
  //example 2 : 
    let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

    // all array elements 
    console.log(`array length : ${myFriends.length}`)//9

for ( let i=0 ; i < myFriends.length ; i++){
console.log(myFriends[i])
}

// array string 
console.log("string elements : ")
for (let i = 0; i < 9 ; i ++){
 if (typeof myFriends[i] === "string")
{console.log(myFriends[i])}
}

let onlyNames=[];

for(let i =0 ; i < myFriends.length; i++){
if (typeof myFriends[i] === "string" ){
onlyNames.push(myFriends[i])
}
}

console.log(onlyNames)


let onlyNumbers=[]

for(let i = 0 ; i < myFriends.length ;i++){
if ( typeof myFriends[i]=="number"){
    onlyNumbers.push(myFriends[i])
}
}

//nested loop :

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for(let i = 0 ; i < products.length;i++){
console.log("#".repeat(10))
console.log(`${products[i]}`)
console.log("Colors:")
for(let i=0 ; i < colors.length; i++){
  console.log(colors[i])
}
console.log('Models :')
for (let i =0 ; i <models.length ; i++ ){
console.log(models[i])
}}

/*loop control :
braek : stop the loop _out
continue :continue the loop , exclude this operation 
label : 5   control the main loop from the nested loop

*/



let pproducts = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];


for(let i = 0; i<pproducts.length; i++){
console.log(pproducts[i])
if(pproducts[i]==="Pen"){
break
}
}

for(let i = 0; i<pproducts.length; i++){

    if(pproducts[i]==="Pen"){
    break
    }

    console.log(pproducts[i])
    }


    productss = ["Keyboard", "Mouse", 10, 20, "Pen", "Pad", 30, 40, "Monitor"];
    //just strings 
console.log('.'.repeat(20))
    for(let i =0 ; i< productss.length ; i++ ){

        if (typeof productss[i]==="number"){
            continue
        }
            console.log(productss [i])
        
    }

let products1 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors1 = ["Red", "Green", "Black"]

//if color===green //break the nested loop// use label 
console.log('try 1111111111111111111111:')
 for(let i = 0 ; i < products1.length ; i++){
    console.log(products1[i])
    console.log('colors :')
    for (let j = 0 ; j < colors1.length ; j ++){
if (colors1[j]==='Green'){
    break
}
console.log(colors1[j] )
    }
}


//if color===green //break the main loop

console.log('try 2222222222222222222222:')
mainLoop : for(let i = 0 ; i < products1.length ; i++){
    console.log(products1[i])
    console.log('colors :')
  nestedLoop: for (let j = 0 ; j < colors1.length ; j ++){
if (colors1[j]==='Green'){
    break mainLoop
}
console.log(colors1[j] )
    }
}


let names=['dunia', 'dalia','manar']
//initialize counter outside the loop / global variable 

let m= 0
// for (;m<names.length;m++){
//     console.log(names[m])

// }
// console.log(m)//3
// console.log(names[m-1])//outside loop 

console.log('hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee:')
for (;;m++){
if (m < names.length){
    console.log(names[m])
}else{
    break
}    
}

let letters=['a','b','c','d']

let k=0

for (;;){
if(k<letters.length){
    console.log(letters[k])
    k++
}else {
    break
}
}


products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h1>show ${showCount} products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write("<div>");
  document.write(`[${i + 1}] ${products[i]}`);
  for (let index = 0; index < colors.length; index++) {
    document.write(`<p>-${colors[index]}</p>`);
  }
  document.write(`<p>${colors.join("|")}</p>`);
  document.write(`</div>`);
}


/* loop :

for 
while 
Do While 
*/

console.log('looooooooooppppppppppppppppppp:')
let animals=['cat','dog','ant','bird']

let index=0
while(index< animals.length){
console.log(animals[index])
index++
if (index==animals.length)
    break
}

//do first then check so the first iteration will happen at all cases 
i = 0;
do {
  console.log(i); //0
  i++;
} while (false);







