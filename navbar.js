//Script For Burger Button

var showMenu = ()=> {
    btn = document.querySelector("#btn");
    Menu = document.querySelector(".navbar");

        btn.addEventListener('click', ()=>{
            Menu.classList.toggle("active");
        });
};
showMenu();