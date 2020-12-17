function scrollTo(element) {
    window.scroll({
        left:0,
        top: element.offsetTop,/* Растояние до элемента  к которму нужно скроиться  */
        behavior: "smooth" /* Cкорость прокрутки  */

    })
}

var button =document.querySelector('.button');
var button =document.querySelector('#footer');
button.addEventListener('click',()=>{ console.log("Вы кликнули по кнопке")
scrollTo(footer);
})
