window.onload = function () {

    var elementsElectrics = document.querySelectorAll('.yellow, .blue');

    var stars = document.querySelectorAll('.tree .star');

    var bombetes = document.querySelectorAll(':not(.star) > .yellow, .blue');

    // primer punt
    hoverCanviarColorBombetes();
    hoverCanviarColorStar();

    // listener per a escoltar al teclat
    document.body.addEventListener("keydown", pressKey);
    // switch que administra la funció del listener ↑
    function pressKey(event) {
        pressedKey = event.key.toUpperCase();

        switch (pressedKey) {
            case "Q": // segon punt
                interruptorElectricitat();
                break;
            case "G":

                break;
            case "R":

                break;
            case "L":

                break;
            case "E":

                break;
            default:
            // fora
        }
    }

    function interruptorElectricitat() {
        elementsElectrics.forEach(function (elemento) {
            if (elemento.style.visibility === 'hidden' || elemento.style.visibility === '') {
                elemento.style.visibility = 'visible';
            } else {
                elemento.style.visibility = 'hidden';
            }
        });
    }

    function cambiarColor(element) {
        if (element.classList.contains('yellow')) {
            element.classList.remove('yellow');
            element.classList.add('blue');
        } else if (element.classList.contains('blue')) {
            element.classList.remove('blue');
            element.classList.add('yellow');
        }
    }

    function hoverCanviarColorBombetes() {

        bombetes.forEach(function (element) {
            element.addEventListener('mouseover', function () {
                cambiarColor(element);
            });

            element.addEventListener('mouseout', function () {
                cambiarColor(element);
            });
        });
    }

    function hoverCanviarColorStar() {

        stars.forEach(function (star) {
            star.addEventListener('mouseover', function () {
                var starElements = document.querySelectorAll('.tree .star .light_pixel');
                starElements.forEach(function (element) {
                    cambiarColor(element);
                });
            });

            star.addEventListener('mouseout', function () {
                var starElements = document.querySelectorAll('.tree .star .light_pixel');
                starElements.forEach(function (element) {
                    cambiarColor(element);
                });
            });
        });
    }

}
