let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro/2;
let velocidadeDoxBolinha = 6;
let velocidadeDoyBolinha = 6;

let colide = false;

let  xRaquete = 5;
let  yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYoponente;

let meusPontos = 0;
let pontosOponente = 0;

let chanceDeErrar = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  moveBolinha();
  verificaColisaoBorda();
  mostraRetangulo(xRaquete, yRaquete);
  mostraRetangulo(xRaqueteOponente, yRaqueteOponente);
  moveRaquete();
  moveRaqueteOponente();
  verificaColisaoDaRaquete(xRaquete, yRaquete);
  verificaColisaoDaRaquete(xRaqueteOponente, yRaqueteOponente);    mostraPlacar();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, raio);
}


function moveBolinha() {
      xBolinha = xBolinha + velocidadeDoxBolinha;
      yBolinha = yBolinha + velocidadeDoyBolinha;
  
}

function verificaColisaoBorda() {
       if(xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeDoxBolinha *= -1;
    }
  
      if(yBolinha + raio > 400 || yBolinha - raio < 0) {
     velocidadeDoyBolinha *= -1;
    }
}

function mostraRetangulo(x, y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
}

function moveRaquete() {
    if(keyIsDown(UP_ARROW)) {
        yRaquete = yRaquete - 10;
    }
  
    if(keyIsDown(DOWN_ARROW)) {
        yRaquete = yRaquete + 10;
    }
}

function verificaColisaoDaRaquete(x, y) {
    colide =  collideRectCircle(x, y, raqueteComprimento,             raqueteAltura, xBolinha, yBolinha, raio);
      if(colide) {
          velocidadeDoxBolinha *= -1;
    }

}

function calculaChanceDeErrar() {
    if(pontosOponente >= meusPontos) {
        chanceDeErrar += 1;
      if(chanceDeErrar >= 39) {
          chanceDeErrar = 40;
      }
       } else { 
           chanceDeErrar -= 1;
         if(chanceDeErrar <= 35) {
             chanceDeErrar = 35;
         }
    }
}

function moveRaqueteOponente() {
  
       velocidadeYoponente = yBolinha -yRaqueteOponente -       raqueteComprimento / 2 - 30;
      yRaqueteOponente += velocidadeYoponente +                 chanceDeErrar;
      calculaChanceDeErrar();
    
}

function mostraPlacar() {
      stroke(255);
      textAlign(CENTER);
      textSize(16);
      fill(color(255, 140, 0));
      rect(130, 10, 40, 20);
      fill(255);
      text(meusPontos, 150, 26);
      fill(color(255, 140, 0));
      rect(430, 10, 40, 20);
      fill(255);
      text(pontosOponente, 450, 26);
      
      
}