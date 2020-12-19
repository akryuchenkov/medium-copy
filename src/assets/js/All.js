var hiddenElement = document.getElementById("box");
var btn = document.querySelector('.btn');


function go_scroll() {
   hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);

window.scroll(x-coord,y-coord)


