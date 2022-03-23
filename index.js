class Retangulo{
  constructor(largura, altura){
    this.altura = altura;
    this.largura = largura;
  }
  calcularArea(){
    return this.altura * this.largura 
  }
  area(){
  return this.calcularArea()
  }
}
class Quadrado extends Retangulo{
 constructor(lado){
  super(lado,lado); 
    
     }
  }

let quadrado = new Quadrado(50);
console.log(quadrado.area());