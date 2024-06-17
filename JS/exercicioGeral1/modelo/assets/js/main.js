function meuEscopo() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function Form(evento) {
        evento.preventDefault();

        const peso = form.querySelector('#Peso');
        const alturaInput = form.querySelector('#Altura');
        const altura = parseFloat(alturaInput);

        if (peso.value !== " " && altura.value !== " ") {
            CalcularIMC(peso.value, altura.value);
        } else {
            resultado.innerHTML = `<p>Insira parâmetros válidos!</p>`
        }



        function CalcularIMC(peso, altura) {
            const imc = peso / (altura ** 2);

            if (imc < 18.5) {
                resultado.innerHTML = `<p>IMC: ${imc} Resultado: Abaixo do Peso</p>`
            } else if (imc >= 18.5 && imc <= 24.9) {
                resultado.innerHTML = `<p>IMC: ${imc} Resultado: Peso normal</p>`
            } else if (imc >= 25 && imc <= 29.9) {
                resultado.innerHTML = `<p>IMC: ${imc} Resultado: Sobrepeso</p>`
            } else if (imc >= 30 && imc <= 34.9) {
                resultado.innerHTML = `<p>IMC: ${imc} Resultado: Obesidade 1</p>`
            } else if (imc >= 35 && imc <= 39.9) {
                resultado.innerHTML = `<p>IMC: ${imc} Resultado: Obesidade 2</p>`
            } else if (imc >= 40) {
                resultado.innerHTML = `<p>IMC: ${imc} Resultado: Obesidade 3</p>`
            }

            console.log('calculo feito!')
        }
    }
    form.addEventListener('submit', Form);
}
meuEscopo();
