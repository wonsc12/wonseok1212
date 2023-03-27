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