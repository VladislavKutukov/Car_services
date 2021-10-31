const Menu = document.querySelectorAll('.nav__link[data-goto]');
if(Menu.length>0){
    Menu.forEach(Menu =>{
        Menu.addEventListener("click", onMenu);
    });
    function onMenu(e){
        const menuLink=e.targer;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue=gotoBlock.getBoundingClientRect().top+pageYOffset- document.querySelector('headers').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }

    }
}



const IconMenu = document.querySelector('.menu__icon');
if(IconMenu){
    const menuBody = document.querySelector('.nav');
    IconMenu.addEventListener("click",function(e){
        IconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}





// const IconMenus = document.querySelector('.intro__button');
// if(IconMenus){
//     const menuBodys = document.querySelector('.modal-content');
//     IconMenus.addEventListener("click",function(e){
//         IconMenus.classList.toggle('_active');
//         menuBodys.classList.toggle('_active');
//     });
// }
