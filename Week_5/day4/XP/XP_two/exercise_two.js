let box=document.getElementById("animate");
let myMove=()=>
{  
    let clear= ()=>
{
    clearInterval(timer);
}

let position=0;
let moveBox=() =>
{
    position++;
    box.style.left= `${position}px`;
    if(box.style.left==`350px`)
    {
        clear();
    }
}
let timer=setInterval(moveBox,1);
}