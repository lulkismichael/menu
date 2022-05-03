let burger = document.querySelector('#toggle');
let nav = document.querySelector('nav');

burger.onclick = function () {
    // for (let i of nav) {
    if (nav.classList.contains('move')) {
        nav.classList.remove('move');
    } else {
        nav.classList.add('move');
    }
    // }l

}
