function greetUser(name){
    document.getElementById("output").innerText = "Hey, " + name + ". How are you?";

}
greetUser("Enrique");

function changeText(){
    document.getElementById("message").innerText = "Hello, World!"
}

function addNumbers(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;document.getElementById("result").innerText = "Result:" + sum;
}

function updateTitle(){
    var inputText = document.getElementById("inputText").value;
    document.getElementById("Title").innerText = inputText;
}

function concatenateStrings(){
    var string1 = document.getElementById("string1").value;
    var string2 = document.getElementById("string2").value;
   var combinedText = string1 + " " + string2; document.getElementById("combinedText").innerText = combinedText
}

document.getElementById("changeColorButton").addEventListener("click", function()
{document.getElementById("colorBox").stylebackground = "blue";});