// var btn=document.querySelector("button")
// var bar=document.querySelector("#filler")
// var grow=0
// btn.addEventListener("click",function(){
//     var int=setInterval(() => {
//         if(grow<=100){
//             var num=grow++
//             filler.style.width=`${num}%`
//         }
//     }, 50);
//     setTimeout(function(){
//         clearInterval()
//     })
// })


var a = Number(prompt("enter a number"))
var fact=1
for(var i=1;i<=a;i++){
   fact=fact*i
}
console.log("factorial")