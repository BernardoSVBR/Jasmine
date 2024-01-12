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
