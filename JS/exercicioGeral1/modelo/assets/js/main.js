function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const pesoInput = form.querySelector('#peso');
        const alturaInput = form.querySelector('#altura');

        const peso = pesoInput.value;
        const altura = parseFloat(alturaInput.value);


        if (peso > 0 && altura > 0) {
            CalcularIMC(peso, altura);
        } else if (peso <= 0) {
            resultado.innerHTML = `<p class="invalido">Valor de peso inválido!</p>`
        } else if (altura <= 0) {
            resultado.innerHTML = `<p class="invalido">Valor de altura inválido!</p>`
        } else {

        }

        function CalcularIMC(peso, altura) {
            let imc = peso / (altura ** 2);
            imc = imc.toFixed(2);

            if (imc < 18.5) {
                resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Abaixo do Peso)</p>`
            } else if (imc >= 18.5 && imc <= 24.9) {
                resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (normal)</p>`
            } else if (imc >= 25 && imc <= 29.9) {
                resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Sobrepeso)</p>`
            } else if (imc >= 30 && imc <= 34.9) {
                resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Obesidade Grau 1)</p>`
            } else if (imc >= 35 && imc <= 39.9) {
                resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Obesidade Grau 2)</p>`
            } else if (imc >= 40) {
                resultado.innerHTML = `<p class="valido">Seu IMC é ${imc} (Obesidade Grau 3)</p>`
            }

        }
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
