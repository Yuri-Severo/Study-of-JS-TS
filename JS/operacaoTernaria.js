const pontuacaoUsuario = 30;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuario Vip" : "Usuario Normal";
//(condição) ? 'caso verdadeiro' : 'caso falso'
//(basicamente, uma versão compacta do if) 

const corUsuario = null; 
const corPadrao = corUsuario || 'Preto';
//caso 'corUsuario' não possua valor, 'corPadrao' será 'Preto' 

console.log(nivelUsuario, corPadrao);