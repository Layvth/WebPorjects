document.addEventListener ('scroll',() => {
    const header = document.querySelector ('.navbar');
    if (window.scrollY > 90) {
        header.classList.add ('navbar-scrolled')
    }else {
        header.classList.remove ('navbar-scrolled')
    }


})