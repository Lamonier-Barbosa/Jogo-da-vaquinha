//carros

//listas carros
let xCarros = [600,600,600,600,600,600];
let yCarros = [40,96,150,210,270,318];
let velocidadeCarros = [ 2 , 2.7 ,3.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro (){
  for (i = 0; i < imagemCarros.length; i ++){ 
   image(imagemCarros[i], xCarros[i],yCarros[i], comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro (){
  for (i = 0; i < imagemCarros.length; i ++){ 
   xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro (){
  for (i = 0; i < imagemCarros.length; i ++){ 
    if(passouTodaTela(xCarros[i])){
   xCarros[i] = 600; 
  }
 }
}
function passouTodaTela (xCarros){
  return xCarros < -50;
}