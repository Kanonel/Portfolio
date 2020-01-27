(function () {
    var a = document.getElementById('nav-mobile');
    a.addEventListener('click', function (event) {
        event.preventDefault();
        var hamburgermenu = document.getElementById('menu-hamburger');
        hamburgermenu.classList.toggle('--active');
    });
    var a = document.getElementById('nav-close');
    a.addEventListener('click', function (event) {
        event.preventDefault();
        var hamburgermenu = document.getElementById('menu-hamburger');
        hamburgermenu.classList.remove('--active');
    });
})();