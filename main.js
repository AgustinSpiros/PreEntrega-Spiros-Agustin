alert("Bienvenido! Compre sus criptos aca ");

const valorBTC = 23753;
const valorDOGE = 33.5;
const valorETH = 1640;
const valorBNB = 315;

let edad = parseInt(prompt("ingrese año de nacimiento"));
let nombre = prompt("ingrese su nombre");
let resultado = 0;

if (edad <= 2005) {
    inicio();
} else {
    alert("Acceso denegado, debe ser mayor de 18 para realizar operaciones");
}

function inicio() {
    let crypto = prompt(nombre + ", " + "ingrese la moneda que quiere comprar ( BTC, DOGE, ETH o BNB )");

    switch (crypto) {
        case "BTC": {
            let montoBTC = prompt("ingrese el monto de BTC que quiere adquirir");
            resultado = cambioBTC (montoBTC, valorBTC);

            realizarCambio()
            let montoTotal = prompt("debe abonar $" + monto + " " + "desea confirmar? ingrese ( si ) para confirmar, ( no ) para cancelar");

            if (montoTotal === "si") {
                alert("Ha comprado" + " " + montoBTC + " " + "BTC, muchas gracias!");
                break;

            } else if (montoTotal === "no") {
                let reintentar = prompt("La compra no se pudo realizar, intente mas tarde. Ingrese  OK para volver a intentar y NO para regresar");
                switch (reintentar) {
                    case "ok": {
                        inicio();
                    }

                    case "no": {
                        salir();
                    }

                }
            }
        }

        case "DOGE": {
            let montoDOGE = prompt("ingrese el monto de DOGE que quiere adquirir");
            resultado = cambioDOGE(montoDOGE, valorDOGE);

            realizarCambio()
            let montoTotal = prompt("debe abonar $" + monto + " " + "desea confirmar? ingrese (si) para confirmar  ( no ) para cancelar");

            if (montoTotal === "si") {
                alert("Ha comprado" + montoDOGE + " " + "DOGE, muchas gracias!");
                break;

            } else if (montoTotal === "no") {
                let reintentar = prompt("La compra no se pudo realizar, intente mas tarde. Ingrese  OK para volver a intentar y NO para regresar");
                switch (reintentar) {
                    case "ok": {
                        inicio();
                    }
                    case "no": {
                        salir();
                    }

                }
            }
        }

        case "ETH": {
            let montoETH = prompt("ingrese el monto de ETH que quiere adquirir");
            resultado = cambioETH(montoETH, valorETH);

            realizarCambio()
            let montoTotal = prompt("debe abonar $" + monto + " " + "desea confirmar? ingrese (si) para confirmar ( no ) para cancelar ");

            if (montoTotal === "si") {
                alert("Ha comprado" + montoETH + " " + "ETH, muchas gracias!");
                break;
            } else if (montoTotal === "no") {
                let reintentar = prompt("La compra no se pudo realizar, intente mas tarde. Ingrese  OK para volver a intentar y NO para regresar");
                switch (reintentar) {
                    case "ok": {
                        inicio();
                    }

                    case "no": {
                        salir();
                    }

                }
            }
        }

        case "BNB": {
            let montoBNB = prompt("ingrese el monto de BNB que quiere adquirir");
            resultado = cambioBNB(montoBNB, valorBNB);

            realizarCambio()
            let montoTotal = prompt("debe abonar $" + monto + " " + "desea confirmar? ingrese (si) para confirmar ( no ) para cancelar");

            if (montoTotal === "si") {
                alert("Ha comprado" + montoBNB + " " + "BNB, muchas gracias!");
                break;
            } else if (montoTotal === "no") {
                let reintentar = prompt("La compra no se pudo realizar, intente mas tarde. Ingrese  OK para volver a intentar y NO para regresar");
                
                switch (reintentar) {
                    case "ok": {
                        inicio();
                    }

                    case "no": {
                        salir();
                    }

                }
            }
        }

    }

}




function cambioBTC(valor1, valor2) {
    return (valor1 * valor2);
}

function cambioDOGE(valor1, valor2) {
    return (valor1 * valor2);
}

function cambioETH(valor1, valor2) {
    return (valor1 * valor2);
}

function cambioBNB(valor1, valor2) {
    return (valor1 * valor2);
}

function realizarCambio() {
    monto = resultado;
}

function salir() {
    alert("Gracias, vuelva prontos");
}