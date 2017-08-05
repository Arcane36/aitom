document.addEventListener("DOMContentLoaded", function(event) {
    new WOW().init();

    var x = document.getElementById("burger");
    x.addEventListener('click', function(event) {
        var m = document.getElementById("myMenu");
        if (m.className === "main-menu") {
            m.className += " main-menu--responsive";
        } else {
            m.className = "main-menu";
        }
    });

});


