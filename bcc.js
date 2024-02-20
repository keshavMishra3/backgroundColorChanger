let vo=document.getElementById("vividOrange")
let sb=document.getElementById("skyBlue")
let g=document.getElementById("gold")
let lm=document.getElementById("limeGreen")
let dp=document.getElementById("deepPurple")
let dao=document.getElementById("darkOrange")

if(vo.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="#FF5733"
}));
else if(sb.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="#42A5F5"
}));
else if(g.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="#FFD700"
}));
else if(lm.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="#8BC34A"
}));
else if(dp.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="#9C27B0"
}));
else if(dao.addEventListener("click",()=>{
    document.querySelector("body").style.backgroundColor="#FF8C00"
}));

