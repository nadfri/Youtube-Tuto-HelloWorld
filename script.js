//1ere façon console.log
console.log("1.Hello World!");

//2eme façon alert()
alert("2.Hello World!");

//3eme façon .textContent
const div1 = document.getElementById("div1");
div1.textContent = "3.Hello World!";

//4eme façon .innerHTML
const div2 = document.getElementById("div2");
div2.innerHTML = "<i>4.Hello World!</i>";

//5eme façon ${} + back tits
const div3 = document.getElementById("div3");
let text = "World!"
div3.textContent = `5.Hello ${text}`;



