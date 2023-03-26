
addEventListener('load', () => {

    const incr  = document.getElementById('incr');
    const reset = document.getElementById('reset');
    const display = document.getElementById('display');

    incr.onclick = () => {
        const value =  parseInt(display.innerHTML);
        display.innerHTML = value + 1;
    }
    reset.onclick = () => {
        display.innerHTML = 0;
    }

});