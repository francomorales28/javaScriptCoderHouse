let saldo = 10000;
const movimientos = [];

function menu() {
    return prompt(
        "Seleccione una opción:" +
        "Consultar saldo (1)" +
        "Depositar dinero (2)" +
        "Retirar dinero (3)" +
        "Salir (4)"
    );
}

function consultarSaldo() {
    alert('Su saldo actual es: $' + saldo);
    console.log('Movimientos:', movimientos);
}

function depositarDinero() {
    let monto = parseInt(prompt('Ingrese el monto a depositar:'));
    if (monto > 0) {
        saldo = saldo + monto;
        movimientos.push('+' + monto);
        alert('Depósito exitoso. Nuevo saldo: $' + saldo);
    } else {
        alert('Monto inválido.');
    }
}

function retirarDinero() {
    let monto = parseInt(prompt('Ingrese el monto a retirar:'));
    if (monto > saldo) {
        alert('Fondos insuficientes.');
    } else if (monto > 0) {
        saldo = saldo - monto;
        movimientos.push('-' + monto);
        alert('Retiro exitoso. Nuevo saldo: $' + saldo);
    } else {
        alert('Monto inválido.');
    }
}

let opcion
let continuar = true;
while (continuar) {
    let opcion = menu();
    switch (opcion) {
        case '1':
            consultarSaldo();
            break;
        case '2':
            depositarDinero();
            break;
        case '3':
            retirarDinero();
            break;
        case '4':
            continuar = false;
            break;
        default:
            alert('Opción inválida.');
    }
}
alert('Gracias por usar el cajero automático. ¡Hasta luego!'); 
