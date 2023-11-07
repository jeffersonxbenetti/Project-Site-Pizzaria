const show = true //VARIÁVEL QUE TERÁ O VALOR SEMPRE VERDADEIRO
const menuContent = document.querySelector('.content')
const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {

    menuContent.classList.toggle('on', show);
    show = !show;
    
});