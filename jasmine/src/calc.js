describe("Calculadora", function() {
  var calculadora;
  var resultadosDiv;

  beforeEach(function() {
    calculadora = new Calculadora();
    resultadosDiv = document.createElement("div");
    resultadosDiv.id = "resultados";
    document.body.appendChild(resultadosDiv);
  });

  it("deve somar dois números", function() {
    var resultado = calculadora.somar(2, 3);
    exibirResultado("Resultado da soma: " + resultado, "soma");
    expect(resultado).toEqual(5);
  });

  it("deve subtrair dois números", function() {
    var resultado = calculadora.subtrair(5, 2);
    exibirResultado("Resultado da subtração: " + resultado, "subtracao");
    expect(resultado).toEqual(3);
  });

  it("deve multiplicar dois números", function() {
    var resultado = calculadora.multiplicar(4, 3);
    exibirResultado("Resultado da multiplicação: " + resultado, "multiplicacao");
    expect(resultado).toEqual(12);
  });

  it("deve dividir dois números", function() {
    var resultado = calculadora.dividir(10, 2);
    exibirResultado("Resultado da divisão: " + resultado, "divisao");
    expect(resultado).toEqual(5);
  });

  it("deve calcular a potência de um número", function() {
    var resultado = calculadora.potencia(2, 3);
    exibirResultado("Resultado da potência: " + resultado, "potencia");
    expect(resultado).toEqual(8);
  });

  it("deve calcular a raiz quadrada de um número", function() {
    var resultado = calculadora.raizQuadrada(16);
    exibirResultado("Resultado da raiz quadrada: " + resultado, "raiz");
    expect(resultado).toEqual(4);
  });
});

// Definição da classe Calculadora
function Calculadora() {
  this.somar = function(a, b) {
    return a + b;
  };

  this.subtrair = function(a, b) {
    return a - b;
  };

  this.multiplicar = function(a, b) {
    return a * b;
  };

  this.dividir = function(a, b) {
    return a / b;
  };

  this.potencia = function(a, b) {
    return Math.pow(a, b);
  };

  this.raizQuadrada = function(a) {
    return Math.sqrt(a);
  };
}

function exibirResultado(resultado, id) {
  var divResultado = document.createElement("div");
  divResultado.textContent = resultado;
  divResultado.id = id;
  document.getElementById("resultados").appendChild(divResultado);
}
