var name1 = prompt("Player1 Name");
var name2 = prompt("Player2 Name");
document.querySelector(".ph1").innerHTML=name1;
document.querySelector(".ph2").innerHTML=name2;
var num1 = Math.floor(Math.random()*6)+1;
var num2 = Math.floor(Math.random()*6)+1;
var dicename1 = "dice"+ num1 + ".JPG";
document.querySelectorAll("img")[0].setAttribute("src", dicename1);
var dicename2 = "dice"+ num2 + ".JPG";
document.querySelectorAll("img")[1].setAttribute("src", dicename2);
if(num1>num2)
{
    document.querySelector("h1").innerHTML = name1+" wins";
}
else if(num2>num1)
{
    document.querySelector("h1").innerHTML = name2+" wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}