let inputfood=document.getElementById("input-food")
let inpubtn=document.getElementById("btn")
let foc=document.getElementById("food-container")
function hello(h){
inpubtn.addEventListener('click',()=>{
    const li=document.createElement("li");
    const text=document.createTextNode(h);
    li.className="food-item";
    li.append(text);

 li.append(Comment);
        
    foc.append(li);
console.log(li.innerText);
})}


hello(h="input.value")

function c(message){
    const mainDiv=document.getElementById("main");
    const div=document.createElement("div");
   
   div.className="alert";
   const textNode=document.createTextNode(message);
   div.append(textNode);
   main.prepend(div);
}
c("food is updated")




let he=document.querySelectorAll(".alert .alert-message")
console.log(he);
