
function incrementa() {
    const visor = document.getElementById('visor');
    const valor = parseInt(visor.innerHTML);

    visor.innerHTML = valor + 1;
}

function zera() {
    const visor = document.getElementById('visor');
    
    visor.innerHTML = 0;
}
