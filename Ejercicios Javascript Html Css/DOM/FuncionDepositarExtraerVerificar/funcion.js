var saldo = 0,
  deposito,
  retiro;

function depositar() {
  deposito = parseFloat(document.getElementsByName("deposito")[0].value);

  if (isNaN(deposito)) {
    alert("El valor ingresado no es número válido");
    return;
  }

  saldo = saldo + deposito;
}

function retirar() {
  retiro = parseFloat(document.getElementsByName("retiro")[0].value);

  if (isNaN(retiro)) {
    alert("El valor ingresado no es número válido");
    return;
  }

  if (retiro > saldo) {
    alert("Su fondo disposible no es suficiente");
    return;
  }

  saldo = saldo - retiro;
}

function verificar() {
  document.getElementsByName("verificacion")[0].value = saldo;
}
