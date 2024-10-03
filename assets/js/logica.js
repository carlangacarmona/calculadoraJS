let calcular = '';

function valores(value) {
    calcular += value;
    document.getElementById('resultado').textContent = calcular;
}

function calculadora() {
    try {
        calcular = eval(calcular).toString();
        document.getElementById('resultado').textContent = calcular;
    } catch (error) {
        document.getElementById('resultado').textContent = 'Error';
        calcular = '';
    }
}

function limpiar() {
    calcular = '';
    document.getElementById('resultado').textContent = '0';
}
