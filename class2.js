// console.log('dunia')//string
// console.log(typeof([1,2,3]))//object
// /*
// data types in js :
// string 
// object
// number 
// boolean //true , false 
// undefined
// type of null is object 
// */
// console.log(typeof 1)//number 
// console.log(typeof(1))
//  console.log(typeof {name:"dunia" , age:27})
//  console.log(typeof true)
//  //
//  console.log(typeof null)//object 
// console.log(typeof dunia)//undefined 

//if declaring dunia after accesing it an error will generated van not access before declare . 
/*variable scope drama 
when declare variable using var it added to window object //attribute for window object
but declaring with let not do the same 
*/
// let dunia ='dunia'
// console.log(window.dunia)//undefined
// console.log(typeof window.dunia)//undefined 

// var dunia1='dunia'
// console.log(window.dunia1)//dunia
// console.log(typeof window.dunia1)//string

//declaring variabls in js using var , let keywards 
//we can declare variales without keywards 

console.log(hello);
console.log(typeof hello)
console.log(hello.innerHTML)//content of html element with hello id . 
hello.innerHTML="option"//change content of html element //also change the content of html element 
console.log(hello.innerHTML)//option 
console.log(test)
console.log(test.innerHTML)
test.innerHTML="dunia \nabd \nalkilany"
document.write("<h5>dunia\nsaif</h5>")
console.log(
    "<h5>dunia\nsaif</h5>"  
)



document.querySelector('h2').style.color='red'

/*naming in js 
-no spaces : let us er = 'dunia'
-can not start with number : let 1user = 'dunia'
-can start with letter or _ $ but can used anywhere else 
-can not use special characters(@, #.... ) in it ()let us#er= 'duniaalkilany'
-sensetivecase 
-camel case : we cimine multiple words and make it one word by capetalize the first letter in each word excert the first word  


*/
let _user='dunia'
console.log(_user)
let $user1='manar'
console.log($user1)

let us_er='basel'
console.log(us_er)

let us$er_er='malek'
console.log(us$er_er)

let user = 'dunia'
User='saif'
//user is not the same variale User 
console.log(user)
console.log(User)
//camel case 
let duniaAlkilany='dunia'


/*var , let , const  
the diferances are :
-redeclare
-access efore declare 
-variale scope drama 
-ES6 : let , const
*/

var user1= 'dunia'
var user1='dalia'
console.log(user1)//dalia

// let user2='testing'
// let user2='hello'
// error : can not redeclare user2

// console.log(variable)//undefined 
// var variable=1 


// console.log(b)//error: can not access before initialization
// let b=2


// console.log(c)//error : can not access brfore initialization 
// const c = 3 

let d = 4 
console.log(window.d)//undefined 

var e = 5 
console.log(window.e)//5


//escape operator : 
console.log("dunia 'alkilany'")//dunia 'alkilany' 
console.log('dunia "alkilany"') //dunia "alkilany"
console.log("dunia \nalkilany")
console.log("dunia\
 abd\
 alkilany");


 
console.log("dunia\
abd\
alkilany")

//concatenation : connect data toghether using + or , or ${}
let a = "programming"
console.log(`ilove ${a} very much `)
console.log('ilove '+a+' very much')
console.log('ilove',a,'very much')

let aa= 'aa'
let bb='bb'
let cc= 'cc'
let dd='dd'

console.log(`${aa}${bb}${cc}${dd}`)

document.write(aa+"\n"+bb+"\n"+cc+"\n"+dd)

console.log(aa + " " + bb + "\n" + cc + " " + dd);

document.write(aa+"\n"+bb+" "+cc+" "+dd)
document.write(`${aa} ${bb}
${cc} ${dd}`)


document.write('\ndunia will \'back\'\nnew line')//no nmew line why ? 

document.write('dunia \\')

let firstName = "dunia";
let lastName = "alkilany";
let markup = ` <div class="card">
<div class="child">
  <h2>${firstName}</h2>
  <p>${lastName}</p>
</div>
</div>`;

document.write(markup)



let var1="title"
let var2="h3 paraghraph bla bla bla la bla"
let var3="data:image/jpeg;base64,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"
let var4=`
<div class="parent">${var1}</div>
<h3 ${var2}</h3> 
<img src= ${var3}>
`
document.write(var4)

// - Variable And Concatenation Challenge
/*[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat*/

let theTitle="Elzero" , theDesctiption="Elzero Web School" , theDate="25/10"

let var5=`<div>
<h3>${theTitle}</h3>
<p>${theDesctiption}</p>
<spam>${theDate}</span>
</div>`

//use template literal in ES6 
//for concatenation + or template literal (ES6)

document.write(var5.repeat(5))//ES6 Repeat 

