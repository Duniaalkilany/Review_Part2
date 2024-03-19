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

let ob = {
    name : "dunia"
    
}

function myFunction (){
    console.log(this)
return 'hello'
}

myFunction ()


//review for object 

obj = {
 name :"Dunia",
 age :26,
 "country of" : "Jordan"
}
//access object using dot notation / bracket notation 

console.log(obj['country of'])
//set new values 
obj.name="dalia"
console.log(obj)

obj["age"]=20
console.log(obj)

//new keyword with obj 

let obj2= new Object(

    {
        name : "Saif",
        age : 30
    }
)
console.log(obj2)   

//this keyword 
//this reffer to the owner of this function 

console.log(this)//window
console.log(this===window)//true
var a= 10
let b = 11
console.log(this.a)//10
console.log(this.b)//undefined

document.getElementById("show").onclick=function(){
    console.log(this)//<button id = "show">show</button>
}

let obj3 = {
    name : "dunia",
    age : 26 , 
    fullName : "",  
    ageInDays : function(){
    //   return(this)//obj3
    this.fullName= `${this.name} alkilany`
      return this.fullName
    },

   
}

//how to access the methos in the object 
console.log(obj3.ageInDays())

//Create method : 
let user3= {
    age : 20, 
    doubleAge: function(){
        return this.age * 2}
}

console.log(user3.doubleAge())//40
//2.using new keyword 
let user4= new Object({
    name : "user4"
})
console.log(typeof user4)//object 

//using another object as prototype :

let user5= Object.create(user4)
console.log(`user5 ::::::::::::::::::::::::::`)
console.log(user5)



let user8 = {
    age: 25,
    doubleAge: function () {
      return this.age * 2;
      // return user8.age * 2;
    },
  };

  let newObj = Object.create(user8);
  console.log(`newObj ::::::::::::::::::::::::::`)
  console.log(newObj)
  console.log(newObj.age)

  newObj.halfAge=function(){
    return this.age / 2 
  }

  console.log(newObj.halfAge())//12.5

  console.log(newObj)

  let user9 = {
    name : "dunia"
  }

user9.text=function(){
    return 'hello hello'
}

console.log(user9)

let user10= Object.create(user9)
console.log(user10)

//constructor function ===> object 
//new 
//object.create()
//object.assign()



let obj1 = {
    prop1: 1,
    meth1: function () {
      return this.prop1;
    },
  };
  

 obj2 = {
    prop2: 2,
    meth2: function () {
      return this.prop2;
    },
  };
  

  let targetObject = {
    prop1: 100,
    prop3: 3,
  };
  
  let finalObject=Object.assign(targetObject,obj1,obj2)

  console.log(finalObject)

console.log(finalObject.prop1)//1
console.log(finalObject.prop2)//2
console.log(finalObject.prop3)//3
console.log(finalObject.meth1())//1
console.log(finalObject.meth2())//2

//updated 

finalObject.prop1=200
console.log(finalObject.prop1)//200

//added
finalObject["skills"]=["swim","sing"]
console.log(finalObject)
console.log(finalObject.skills)

//

let newObj1= Object.assign({},obj1)
console.log(newObj1)

//to know length of object 
newObj= {
    name : "dunia",
    age : 26,
    doubleAge:function(){
return this.age*2
    }
}

    console.log(Object.keys(newObj))//[name, age,doubleAge]
    console.log(Object.values(newObj))//["dunia",age,f]

    console.log(Object.keys(newObj).length)//3
    console.log(Object.values(newObj).length)//3

    let favFilms = {
        "me before you": {
          actor: "aaa",
          year: 2000,
          oscars: {
            first: "kk",
            second: "gg",
          },
        },
        "twilight blabla": {
          actor: "bbb",
          year: 3000,
        },
        anyOne: {
          actor: "anyOne",
          year: 4000,
          oscars: {
            first: "unknowm ",
            second: "unknown",
          },
        },
      };

      console.log(Object.keys(favFilms).length)
      console.log(Object.keys(favFilms.anyOne).length)//3
      console.log(Object.keys(favFilms.anyOne.oscars).length)//2

      //output of keys and values methods of Object constructor is array 
      //[me before you ,twilight blabla ,  anyOne]
      for (let i = 0 ; i < Object.keys(favFilms).length ; i++){
console.log(`Film Name : ${Object.keys(favFilms)[i]}`)
console.log(`Actor : ${favFilms[Object.keys(favFilms)[i]].actor}`)
console.log(`Year : ${favFilms[Object.keys(favFilms)[i]].year}`)

    if (favFilms[Object.keys(favFilms)[i]].oscars){
        console.log(favFilms[Object.keys(favFilms)[i]].oscars.first)
        console.log(favFilms[Object.keys(favFilms)[i]].oscars.second)
               }
      }

