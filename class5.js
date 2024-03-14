// object : 
//create user obj (have to proparty(theName,country))

let user = {
    theName: "dunia",
    country: "jordan"
}

console.log(user)
/*
naming of prpparties l899
as naming of variables
aceess object [dot notation , bracket notation] 
object contain (proparties , method/Action)
name of the property:as naming of variable  
you can use string to name the properties of the object 
-if the name of the property is variable you can accees it by . notation 
but if the name of the property is string you can not access it by dot notation but by using bracket notation . 
*/

let available = true; 

//properaties :name , age m skills , available , addresses nested object:(ksa , egypt(one, two)), checkAv: method 

let user2 = {

    name : "dunia",
    age : "26",
    skills : ["HTML","JS","CSS"],
    available: false ,
    "country of" : " jordan",
    addresses : {
     ksa:"Riyadh" ,
     egypt: {
        one : "Cairo", 
        two: "Giza"
     }
    }, 
    checkAv: function (){
        console.log(`available : ${available}`)
    if (available===true){
      return 'Free For Work'}
      else {
     'not Free for work'
        }
    },

    checkAv2 : function(){
        if (user2.available){
     return 'free'
        }else {
   return 'not free'
        }
    }
}

console.log(available)//true
console.log(user2.available)//false

console.log(user2["country of"])
console.log(user2.name)
console.log(user2.skills)
console.log(user2.skills[1])
console.log(user2.skills[2].charAt(1))//S
console.log(user2.addresses.ksa)
console.log(user2.addresses.egypt.one)
console.log(user2["available"])//false
console.log(user2["addresses"]["egypt"]["one"])//cairo

console.log(user2.checkAv())//free for work 

console.log(user2.checkAv2())//not free 

//create object by new keyword : 


user = {
    age : 26
}
console.log(user["age"])//26

user2= new Object(
    {
        age : "26"
    }
) 

//add , rdit values of object proparties 

let person = {
    name : "dunia" , 
    age : 26

}

//dot notation / bracket notation 
person["country"]="jordan"
person.lastName="kilany"
person["middle Name"]="abd"
person.age=27
console.log(person)

let obj = new Object({
    name: "dunia"
})

//add method to obj 

obj.sayHello=function(){
    return "hellllo"
}
console.log(obj)
console.log(obj.sayHello())

//this ==> whwre you use it 

console.log(this)//windows










