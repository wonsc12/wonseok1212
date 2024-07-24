const header = document.querySelector(".header");
const gnb = document.querySelectorAll(".gnb > li");
const sections = document.querySelectorAll(".section");
console.log(sections);
console.log(gnb);


let secStart = [];
    for(let i=0 ; i< gnb.length; i++){
        gnb[i].addEventListener("click",function(e){

            e.preventDefault();
            let scrollMove = sections[i].offsetTop;
            window.scrollTo({
                top:scrollMove,
                behavior:"smooth"
            });
        });
    };
    for( let i=0; i<sections.length; i++){
        secStart[i] = sections[i].offsetTop;

    }
   

    console.log(secStart);
    window.addEventListener("scroll",function(){

        let scTop = window.scrollY;
        let cont2Start = document.querySelector(".cont2").offsetTop;

        if(scTop >= cont2Start-100 ){
            
            header.classList.add("fixer");
            
            fluson();

            
        }
        
        else{
            
            header.classList.remove("fixer");
            
            fluson();

        }
        for(let i=0; i<gnb.length; i++){

            if(scTop >= secStart[i]){
                for(let j=0; j < gnb.length; j++){
                    gnb[j].classList.remove("on");
                }
                gnb[i].classList.add("on");
            }
        }
        function fluson(){
             
            for(let i=0; i<gnb.length; i++){
                gnb[i].classList.remove("on");
            }
        }
        if(scTop > secStart[1] && scTop < secStart[2]){
            sections[1].classList.add("move");
    
    
       
    
    
        }
        else if(scTop > secStart[2] && scTop < secStart[3]){
            sections[2].classList.add("move");
    
    
        }
        else if(scTop > secStart[3] && scTop < secStart[4]){
            sections[3].classList.add("move");
    
    
        }
        else if(scTop > secStart[4] && scTop < secStart[5]){
            sections[4].classList.add("move");
    
    
        }
        
        
    
    
        
    })

 