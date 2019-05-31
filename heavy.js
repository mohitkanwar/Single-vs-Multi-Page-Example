/**
 * COPYRIGHT NOTICE.
 * 
 * THIS IS A VERY IMPORTANT FILE CREATED SPECIALLY TO INCREASE THE LOAD TIME OF A PAGE.
 * DO NOT COPY THIS FILE IN ANY OF YOUR SYSTEMS. IT IS USELESS APART FROM DEMONSTRATING 
 * HOW HEAVY SOME FILES COULD BE.
 * 
 * WELL, IF YOU LIKE YOU MAY COPY IT ON YOUR OWN RISK.
 */
function heavy(){
    setTimeout(show(),3000);
}
function show(){
    var x = document.getElementsByClassName("d-none");
    for(var i=0;i<x.length;i++){
        setTimeout(x[i].classList.remove("d-none"),1000);
        
    }
}
heavy();