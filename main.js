const form = document.getElementById('form-exercicio');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');

function validaValor(valorA, valorB) {
    return valorB > valorA;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();


    const valorCampoA = Number(campoA.value);
    const valorCampoB = Number(campoB.value);

    const mensagemSucesso = 'O valor do campo A e B foram submetidos.';
    const formValido = validaValor(valorCampoA, valorCampoB);
    
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block'; 

        campoA.value = '';
        campoB.value = '';

        document.querySelector('.error-message').style.display = 'none';

    
    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    
    }
}) 

campoB.addEventListener('change', function(e) {
    const valorCampoA = Number(campoA.value);
    const valorCampoB = Number(campoB.value);
    const formValido = validaValor(valorCampoA, valorCampoB);

    if (!formValido) {
        campoB.classList.add('error'); 
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})