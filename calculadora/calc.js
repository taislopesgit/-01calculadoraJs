var valor;
var resultado;

function botao(numero) 
{
   valor = document.calc.visor.value += numero;
}

function limpa() 
{
   document.calc.visor.value ="";
}

function calcula() 
{
   resultado = eval(valor);
   document.calc.visor.value = resultado;
}

