// console.log(window)
//  console.log(this)
//  console.log(typeof window.document)
// // // // windows : global object 
// // // // document property of windows , it is also object . 
// console.log('dunia')
// console.log(window.document)
// console.log('dunia')
// console.log(typeof window.document)

// console.log('dunia')
// console.log(typeof window)
// console.log(typeof this)
// function Test(){
//     return this
    
// }
// console.log(Test())

// setTimeout(() => {
//     console.log(`Hello`);
//   }, 2000);
//   setTimeout;
// this.setInterval(() => {
//    console.log(`i will run every 2 second `);
//   }, 1000);
//  setInterval();
// this.setTimeout(() => {
//     console.log(`Hello`);
//   }, 2000);
//   setTimeout();


//  /*variable scope drama in browse  */

//  var d1='dunia'//added to the windows global object 
//  let d2='dunia2'//not add to windows object 
//  console.log(window.d1)
// //  console.log(window.d2)
//  let arr=["1","2","3"]
//  console.log(arr.at(0))
 
// setInterval(()=>{console.log('Hello')}
// ,2000)
// setInterval();
// function myFunction(){
//     console.log('Hello world')
// }
// setInterval(myFunction,1000);

// setInterval(()=>{
//     console.log('sucess')
// },1000);

// setTimeout(function dunia(){console.log('love programming')},2000)


// //windows (global variable predefined functions)
// setInterval(()=>{console.log('love love programming')},1000)
// //as we said window is object :

//  window.alert('hi from dunia !')
//  window.alert('heloooooooooooooooo!!')
//  alert('use aler in js to interact with html doc but it something of the window properties ')
//  //avoid to use alert , use pop up instead of it 
//  //console object 
//  console.log('test console properties ,write some thing to console ')
 //output an error message to console 
//  console.error('error')
//  console.table([1,2,3])
//  let TestArray=[1,2,3,4]
//  console.log(TestArray)
//  console.log(TestArray.indexOf(3))
//  console.log(TestArray.indexOf(3,3))
// console.table([1,2,3,4])


console.table(["apples", "oranges", "bananas"])
const people = [
    ["Tyrone", "Jones"],
    ["Janet", "Smith"],
    ["Maria", "Cruz"],
  ];
  console.table(people);
  console.log(people)

  console.log(
    "%chello  lets style what we log on console ",
    "color:red;font-size:40px",
    "color:blue;font-size:20px"
  );

  let arrayc=["dunia","alkilany"]

  console.log("%c"+ arrayc , "color: red" )
  //document object 
  document.write('hi');
  document.write('<h1>write to the html doc h1 tag </h1>')
  document.write('<img src="data:image/jpeg;base64,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">')
  document.getElementById('show').style.backgroundColor='red'