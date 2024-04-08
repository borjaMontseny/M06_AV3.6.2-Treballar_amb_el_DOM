// borjaMontseny DAW 2n Dual Tarda [M06 - AV 3.6.2 Treballar amb el DOM]
window.onload = function () {

    let correntElectrica = true;
    let hiHanGarnaldes = false;
    let hiHanRegals = false;
    let elementsElectrics = document.querySelectorAll('.yellow, .blue');
    let stars = document.querySelectorAll('.tree .star .yellow');
    let bombetes = document.querySelectorAll(':not(.star) > .yellow, .blue');
    let pots = document.querySelectorAll('.pot');
    let segonPot = pots[1];
    let tercerPot = pots[2];

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
                console.log("Lletra/Acció no reconeguda");
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
                let starElements = document.querySelectorAll('.tree .star .light_pixel');
                starElements.forEach(function (element) {
                    cambiarColor(element);
                });
            });

            star.addEventListener('mouseout', function () {
                let starElements = document.querySelectorAll('.tree .star .light_pixel');
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

            /*
            He simplificat el procediment en una sola línia:
            
            let tercerFork = document.querySelectorAll('.tree .fork')[2];
            let garlanda1 = tercerFork.querySelector('.light_pixel:first-child');
            garlanda1.className = "light_pixel red";
            */

            document.querySelectorAll('.tree .fork')[2].querySelectorAll('.light_pixel')[0].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[3].querySelectorAll('.light_pixel')[2].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[4].querySelectorAll('.light_pixel')[3].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[4].querySelectorAll('.light_pixel')[4].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[4].querySelectorAll('.light_pixel')[5].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[4].querySelectorAll('.light_pixel')[6].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[6].querySelectorAll('.light_pixel')[8].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[7].querySelectorAll('.light_pixel')[8].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[8].querySelectorAll('.light_pixel')[7].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[8].querySelectorAll('.light_pixel')[6].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[9].querySelectorAll('.light_pixel')[1].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[9].querySelectorAll('.light_pixel')[5].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[9].querySelectorAll('.light_pixel')[6].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[10].querySelectorAll('.light_pixel')[2].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[10].querySelectorAll('.light_pixel')[3].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[10].querySelectorAll('.light_pixel')[4].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[11].querySelectorAll('.light_pixel')[1].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[11].querySelectorAll('.light_pixel')[14].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[12].querySelectorAll('.light_pixel')[2].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[12].querySelectorAll('.light_pixel')[13].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[13].querySelectorAll('.light_pixel')[4].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[13].querySelectorAll('.light_pixel')[5].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[13].querySelectorAll('.light_pixel')[6].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[13].querySelectorAll('.light_pixel')[12].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[13].querySelectorAll('.light_pixel')[13].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[14].querySelectorAll('.light_pixel')[7].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[14].querySelectorAll('.light_pixel')[8].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[14].querySelectorAll('.light_pixel')[9].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[14].querySelectorAll('.light_pixel')[10].className = "light_pixel red";
            document.querySelectorAll('.tree .fork')[14].querySelectorAll('.light_pixel')[11].className = "light_pixel red";

            // guardem aixo en una variable per a que no es descontroli
            hiHanGarnaldes = true;
            console.log("Ara hi han garnaldes");
        } else if (hiHanGarnaldes) {
            console.log("Ja hi han garnaldes");
        }
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


            hiHanRegals = true; // modifiquem la variable per a control d'errors
            console.log("Ara hi han regals");
        } else if (hiHanRegals) {
            console.log("Ja hi han regals");
        }
    }
}