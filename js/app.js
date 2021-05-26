const MenuMobile = document.querySelector('.menu-mobile')
const Header = document.querySelector('.header')
const btnMenu = document.querySelector('.icon-menu-mobile')
const contMenu1 = document.querySelector('.content-menu')
const contMenu2 = document.querySelector('.content-menus')

let Wscreen = window.screen.width
//console.log(Wscreen)

if(Wscreen > 768){
    MenuMobile.classList.add('hidden')
}else{
    Header.classList.add('hidden')
}

contMenu1.classList.add('hidden')
contMenu2.classList.add('hidden')

btnMenu.addEventListener('click', () => {
    if(contMenu1.classList.contains('hidden')){
        contMenu1.classList.remove('hidden')
        contMenu2.classList.remove('hidden')
    }else{
        contMenu1.classList.add('hidden')
        contMenu2.classList.add('hidden')
    }
})