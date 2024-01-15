window.onload = function () {

    var correntElectrica = true;

    var hiHanGarnaldes = false;

    var hiHanRegals = false;

    var elementsElectrics = document.querySelectorAll('.yellow, .blue');

    var stars = document.querySelectorAll('.tree .star .yellow');

    var bombetes = document.querySelectorAll(':not(.star) > .yellow, .blue');

    var pots = document.querySelectorAll('.pot');

    var segonPot = pots[1];

    var tercerPot = pots[2];

    // primer punt
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
                crearGarnaldes()
                break;
            case "R": // quart punt
                console.log("R");
                crearRegals();
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
            console.log("No hi ha electricitat per encendre l'estrella");
        }
    }

    function crearGarnaldes() {
        if (!hiHanGarnaldes) {
            var tercerFork = document.querySelector('.tree .fork:nth-child(3)');

            if (tercerFork) {
                var garnalda1 = tercerFork.querySelector('.light_pixel:nth-child(1)');

                if (garnalda1) {
                    garnalda1.className = "light_pixel red";
                    console.log('Ja tens garnaldes');
                    hiHanGarnaldes = true;
                } else {
                    console.log('No s\'ha trobat el div desitjat dins del tercer fork');
                }
            } else {
                console.log('No s\'ha trobat el tercer fork');
            }
        } else {
            console.log('Ja hi han garnaldes');
        }

        hiHanGarnaldes = true;

    }

    function crearRegals() {

        // Si no hi han regals, es crearàn
        if (!hiHanRegals) {
            // Segona línia del tronc
            // Esquerra
            segonPot.insertBefore(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";
            segonPot.insertBefore(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";
            segonPot.insertBefore(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel red";
            segonPot.insertBefore(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel red";
            segonPot.insertBefore(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";
            segonPot.insertBefore(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel red";
            segonPot.insertBefore(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel red";
            segonPot.insertBefore(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel red";

            // Dreta
            segonPot.appendChild(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";
            segonPot.appendChild(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel red";
            segonPot.appendChild(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";
            segonPot.appendChild(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";
            segonPot.appendChild(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";
            segonPot.appendChild(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";
            segonPot.appendChild(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel red";
            segonPot.appendChild(document.createElement("div"), segonPot.childNodes[0]).className = "light_pixel";

            // Tercera línia del tronc
            // Esquerra
            tercerPot.insertBefore(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel";
            tercerPot.insertBefore(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel";
            tercerPot.insertBefore(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.insertBefore(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.insertBefore(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel";
            tercerPot.insertBefore(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.insertBefore(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.insertBefore(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";

            // Dreta
            tercerPot.appendChild(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel";
            tercerPot.appendChild(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.appendChild(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.appendChild(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.appendChild(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel";
            tercerPot.appendChild(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.appendChild(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";
            tercerPot.appendChild(document.createElement("div"), tercerPot.childNodes[0]).className = "light_pixel red";


            hiHanRegals = true;
        } else if (hiHanRegals) {
            console.log("Ja hi han regals");
        }

    }

    /*
    en cas que sigui la primera vegada que creem regals, ho guardem en una variable perquè no se'n creïn més
    */
}