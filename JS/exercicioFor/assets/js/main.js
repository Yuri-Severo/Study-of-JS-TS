function myScope() {
    const result = document.querySelector('.result'); 
    const elements = [
        { tag: 'p', texto: 'Frase 1' },
        { tag: 'div', texto: 'Frase 2' },
        { tag: 'footer', texto: 'Frase 3' },
        { tag: 'section', texto: 'Frase 4' },
    ]

    for (var i = 0; i < elements.length; i++) {

        var { tag, texto } = elements[i];
        var newTag = document.createElement(tag);

        newTag.innerHTML = texto;

        result.appendChild(newTag);
    }
}
myScope();