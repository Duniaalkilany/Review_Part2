//dom : interact with html from js //Document Object Model  . 
document.write("<h2>DOM : Write to html from js </h2>")
//when using js to write on html aware that script tag at the end of html file or on the js use window.onload function to execute js when all html element loaded . 
 window.onload=function () {
    document.querySelector('h1').style.color='red'
 }
//بغض النظر عن موقع script tag in html document 
window.onload=function(){
    document.write('<h1>Title: dunia Testing DOM<h1>')
}

/*DOM 
keyword : document 
*/