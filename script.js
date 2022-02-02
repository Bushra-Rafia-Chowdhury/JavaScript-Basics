document.getElementById("demo").innerHTML = "JS"; /*id */
/*dot for puts class on queryselector*/
document.querySelector(".demo").innerHTML = "Bushra"; 
/*# for puts id on queryselector*/
document.querySelector("#demo1").innerHTML = " Learning JS";

/* nothing for puts class on getElementById*/
document.getElementById("demo2").innerHTML = "It was a great learning";

function myfunction() {
    document.getElementById("demo3").innerHTML = "My name is Bushra";
}

function myfunction1() {
    document.querySelector("#demo4").innerHTML = "Good reading habits are the most beneficial habits a person can have. It is not only useful in gaining knowledge but also improves our social status. The more we read, the wiser we become and hence the more recognition we get in society. Good reading also makes us competitive and argumentative. It also improves your vocabulary and lets you learn new words every time you sit down to read. Reading good books is a way to progress and prosper in life. Whatever language you chose, reading a book is always helpful. Reading elevates your thinking and takes you to a whole new level of knowledge and confidence. It lets you look at life and success from a whole new perspective. Children who have access to good reading books are seen to be more productive, creative, and quick learners. Books give us access to more information than a lecture that runs for an hour or two. You just have to develop good reading habits in you, by some method or the other. First, pick a book of the subject or genre you like. Getting your eyes on a book of your choice will help inculcate good reading habits in you.";
}

function myfunction2() {
    document.querySelector(".class1").style.color = "red";
}

function myfunction3() {
    document.querySelector(".class2").style.backgroundColor = "black";
    document.querySelector(".class2").style.color = "white";
    document.querySelector(".class2").style.padding = "100px";
    document.querySelector(".class2").style.margin = "100px";
    document.querySelector(".class2").innerHTML = " Yes, it is heading 2.";
}