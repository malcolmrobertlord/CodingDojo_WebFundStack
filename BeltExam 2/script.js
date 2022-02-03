function cookiesdisappear() {
    var cookiesbar = document.querySelector("#cookies");    
    cookies.remove();
}

function hover(element) {
    element.setAttribute('src', './images_2/assets/succulents-2.jpg')
}

function out(element) {
    element.setAttribute('src', './images_2/assets/succulents-1.jpg')
}