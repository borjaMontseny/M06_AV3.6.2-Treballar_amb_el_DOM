window.onload = function () {

    var correntElectrica = true;

    var elementsElectrics = document.querySelectorAll('.yellow, .blue');

    var stars = document.querySelectorAll('.tree .star .yellow');

    var bombetes = document.querySelectorAll(':not(.star) > .yellow, .blue');

    var forks = document.querySelectorAll('.fork');

    var pots = document.querySelectorAll('.pot');

    var segonPot = pots[1];

    var tercerPot = pots[2];

    // primer punt
    crearRegals();
    hoverCanviarColorBombetes();
    hoverCanviarColorStar();

    // listener per escoltar al teclat
    document.body.addEventListener("keydown", pressKey);
    // switch que administra la funció del listener ↑
    function pressKey(event) {
        pressedKey = event.key.toUpperCase();

        switch (pressedKey) {
            case "Q": // segon punt
                console.log("Q");
                interruptorElectricitat();
                break;
            case "G": // tercer punt
                console.log("G");

                break;
            case "R": // quart punt
                console.log("R");

                break;
            case "L": // cinquè punt
                console.log("L");
                interruptorBombetes()
                break;
            case "E": // sisè punt
                console.log("E");
                interruptorStar()
                break;
            default: // fora
                console.log("Lletra no reconeguda");
        }
    }

    function interruptorElectricitat() {
        elementsElectrics.forEach(function (celdaElementElectric) {
            if (celdaElementElectric.style.visibility === 'hidden' || celdaElementElectric.style.visibility === '') {
                celdaElementElectric.style.visibility = 'visible';
                correntElectrica = true;
                console.log("Ara hi ha corrent elèctrica");
            } else {
                celdaElementElectric.style.visibility = 'hidden';
                correntElectrica = false;
                console.log("No hi ha corrent elèctrica");
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

        bombetes.forEach(function (celdaBombeta) {
            celdaBombeta.addEventListener('mouseover', function () {
                cambiarColor(celdaBombeta);
            });

            celdaBombeta.addEventListener('mouseout', function () {
                cambiarColor(celdaBombeta);
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

    function interruptorBombetes() {
        if (correntElectrica) {
            bombetes.forEach(function (bombeta) {
                if (bombeta.style.visibility === 'hidden' || bombeta.style.visibility === '') {
                    bombeta.style.visibility = 'visible';
                    console.log("Has encès la bombeta");
                } else {
                    bombeta.style.visibility = 'hidden';
                    console.log("Has apagat la bombeta");
                }
            });
        } else if (!correntElectrica) {
            console.log("No hi ha electricitat per encendre les bombetes");
        }
    }

    function interruptorStar() {
        if (correntElectrica) {
            stars.forEach(function (celdaStar) {
                if (celdaStar.style.visibility === 'hidden' || celdaStar.style.visibility === '') {
                    celdaStar.style.visibility = 'visible';
                    console.log("Has encès l'estrella");
                } else {
                    celdaStar.style.visibility = 'hidden';
                    console.log("Has apagat l'estrella");
                }
            });
        } else if (!correntElectrica) {
            console.log("No hi ha electricitat per encendre la estrella");
        }
    }

    function crearRegals() {

        var divRegal = document.createElement('div');
        divRegal.className = 'light_pixel red';

        for (var i = 0; i < 3; i++) {
            var divRegal = document.createElement('div');
            divRegal.className = 'light_pixel red';

            segonPot.appendChild(divRegal);
        }

        for (var i = 0; i < 3; i++) {
            var divRegal = document.createElement('div');
            divRegal.className = 'light_pixel red';

            // Obtén el primer hijo del contenedor y lo inserta antes de él
            var primerHijo = segonPot.firstChild;
            segonPot.insertBefore(divRegal, primerHijo);
        }
    }
}
