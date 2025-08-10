let btn=document.getElementById("sub");
btn.addEventListener('click',flip);
function flip(){
    let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let str="#";
    for(let i=0;i<6;i++){
        let ind=Math.floor(Math.random()*16);
        let ch=hex[ind];
        str+=ch;
    }
    console.log(str);
    let tag=document.getElementById("color");
    tag.style.backgroundColor=str;
}