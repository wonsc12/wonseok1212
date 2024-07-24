const tabMenu = document.querySelectorAll(".tabMenu > li > a");
    
const tabSet = document.querySelectorAll(".tabSet");



    tabConts(tabMenu,tabSet)



    function tabConts(menu,cont){


        for( let i = 0 ; i < menu.length; i++){
            menu[0].classList.add("color");
            menu[i].addEventListener("click",(e)=>{
                e.preventDefault();
                for(let j = 0 ; j < menu.length; j++){

                    menu[j].classList.remove("color");
                    cont[j].style.display = "none";
                    
                }

                menu[i].classList.add("color");
                cont[i].style.display = "flex";
            



            });
        }
    }

    const tabMenu2 = document.querySelectorAll(".tabMenu2 > li > a");
    
    const tabSet2 = document.querySelectorAll(".tabSet2");
    
    
    
        tabConts(tabMenu2,tabSet2)
    
    
    
        function tabConts(menu2,cont2){
    
    
            for( let i = 0 ; i < menu2.length; i++){
                menu2[0].classList.add("color");
                menu2[i].addEventListener("click",(e)=>{
                    e.preventDefault();
                    for(let j = 0 ; j < menu2.length; j++){
    
                        menu2[j].classList.remove("color");
                        cont2[j].style.display = "none";
                        
                    }
    
                    menu2[i].classList.add("color");
                    cont2[i].style.display = "flex";
                
    
    
    
                });
            }
        }    