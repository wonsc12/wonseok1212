const footer = document.querySelector(".footertop")
const sdtd = document.querySelector(".sdtd");


let secStart2 = [];
sdtd.addEventListener("click",function(){

    
    let scrollMove =footer.offsetTop;
    window.scrollTo({
        top:scrollMove,
        behavior:"smooth"
    });
    secStart2 = footer.offsetTop;
    
});