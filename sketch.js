var fundo, jogo, instruções, créditos, seta, setainstruções, setajogar, setacreditos, gameover, acertou;
var x =400 , y = 420, ym = y-80; 
var tela = 0, op = 1;
var t = 2;
var cr = 0;

function preload(){
  fundo = loadImage('Menu/menu.jpg'); 
  jogo = loadImage('Menu/jogo.jpg');
  instruções = loadImage('Menu/instruções.jpg');
  créditos = loadImage('Menu/créditos.jpg');
  seta = loadImage('Menu/seta.png');
  setainstruções = loadImage('Menu/setainstru.png');
  setajogar = loadImage('Menu/setajogar.png');
  setacreditos = loadImage('Menu/setacreditos.png');
  gameover = loadImage('Menu/game over.jpg');
  acertou = loadImage('Menu/acertou.jpg');
}
function setup() {
  createCanvas(550, 400);
  frameRate(30);
}



function voltar(){
  //image(seta, 505, 14, 116, 43);
  if((mouseX > 508 && mouseX < 529) && (mouseY >10 && mouseY < 37)){
      stroke(0);
      strokeWeight(4);
      noFill();
      //rect(505, 14, 116, 43, 20)
    image(seta, 505, 9, 28, 33);
      if(mouseIsPressed){
        tela = 0;
      }
    }
  
  //bord(505, 116, 14, 43, 0, 0, 0);
}


function telas(){
  if(tela == 0){
    background(fundo);
    if((mouseX > 377 && mouseX < 489) && (mouseY > 79 && mouseY < 118)){
      image(setajogar, 376, 76, 116, 43);
      if(mouseIsPressed){
        tela = 1;
      }
    }
    if((mouseX > 377 && mouseX < 489) && (mouseY > 133 && mouseY < 172)){
      image(setainstruções, 376, 131, 116, 43);
      if(mouseIsPressed){
        tela = 2;
         
      }
    }
    if((mouseX > 377 && mouseX < 489) && (mouseY >  191 && mouseY < 230)){
      image(setacreditos, 376, 189, 116, 43);
      if(mouseIsPressed){
        tela = 3;
        
      }
    }
  }
  
  if(tela == 1){
    fase1();
  }
  
  
  if(tela == 2){
    background(instruções);
    voltar()
  }
  if(tela == 3){
    background(créditos);
    voltar()
  }
  if(tela == 4){
    Derrota()
  }
  if(tela == 5){
    Vitoria();
  }
  if(tela == 6){
    fase2();
  }
  if(tela == 7){
    fase3();
  }
  if(tela == 8){
    fase4();
  }
}
function Vitoria(){
  background(acertou);
  t = 2
  voltar()  
  cr = 0;
}
function Derrota(){
  background(gameover); 
  t = 2
  voltar()
  cr = 0;
}

function fase1(){
    background(jogo);
    if(frameCount%30==0){
      t-=1
    } 
    if(t > 0){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(165, 89, 231-165, 174-89)
    }
    else{
      if((mouseX > 165 && mouseX < 231) && (mouseY > 89 && mouseY < 174)){
        if(mouseIsPressed){
          tela = 6;
          t = 6;
        }
      }
      if((mouseX > 235 && mouseX < 301) && (mouseY > 89 && mouseY < 174)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 401) && (mouseY > 89 && mouseY < 174)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 401) && (mouseY > 159 && mouseY < 274)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 401) && (mouseY > 229 && mouseY < 374)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 235 && mouseX < 301) && (mouseY > 159 && mouseY < 274)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 165 && mouseX < 201) && (mouseY > 159 && mouseY < 274)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 235 && mouseX < 301) && (mouseY > 229 && mouseY < 374)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 165 && mouseX < 201) && (mouseY > 229 && mouseY < 374)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
    }
    voltar()
  }
function fase2(){
    background(jogo);
    if(frameCount%30==0){
      t-=1
    } 
    if(t > 4){
      background(acertou);
    }
    else if(t > 2){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(165, 89, 231-165, 174-89)
    }
    else if(t > 0){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(305, 89, 231-165, 174-89)
    }
    else{
      if((mouseX > 165 && mouseX < 231) && (mouseY > 89 && mouseY < 174)){
        if(mouseIsPressed){
          cr = 1;
        }
      }
      if((mouseX > 235 && mouseX < 301) && (mouseY > 89 && mouseY < 174)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 401) && (mouseY > 89 && mouseY < 174)){
        if(mouseIsPressed){
          if(cr==1){
            cr=2;
          }
          else{
            tela = 4
          }
        }
      }
      if((mouseX > 305 && mouseX < 401) && (mouseY > 159 && mouseY < 274)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 401) && (mouseY > 229 && mouseY < 374)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 235 && mouseX < 301) && (mouseY > 159 && mouseY < 274)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 165 && mouseX < 201) && (mouseY > 159 && mouseY < 274)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 235 && mouseX < 301) && (mouseY > 229 && mouseY < 374)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 165 && mouseX < 201) && (mouseY > 229 && mouseY < 374)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if(cr == 2){
        cr = 0;
        t = 8;
        tela = 7;
      }
    }
  }
function fase3(){
    background(jogo);
  console.log(cr);
    if(frameCount%30==0){
      t-=1
    } 
    if(t > 6){
      background(acertou);
    }
    else if(t > 4){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(165, 89, 231-165, 174-89)
    }
    else if(t > 2){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(305, 89, 231-165, 174-89)
    }
    else if(t > 0){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(235, 271, 66, 85)
    }
    else{
      if((mouseX > 165 && mouseX < 165+66) && (mouseY > 89 && mouseY < 89+85)){
        if(mouseIsPressed){
          cr = 1;
        }
      }
      if((mouseX > 235 && mouseX < 235+66) && (mouseY > 89 && mouseY < 89+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 305+66) && (mouseY > 89 && mouseY < 89+85)){
        if(mouseIsPressed){
          if(cr == 1 || cr == 2){
            cr=2;
          }
          else{
            tela = 4
          }
        }
      }
      if((mouseX > 305 && mouseX < 305+66) && (mouseY > 180 && mouseY < 180+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 305+66) && (mouseY > 271 && mouseY < 271+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 235 && mouseX < 235+66) && (mouseY > 180 && mouseY < 180+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 165 && mouseX < 165+66) && (mouseY > 180 && mouseY < 180+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 235 && mouseX < 235+66) && (mouseY > 271 && mouseY < 271+85)){
        if(mouseIsPressed){
          if(cr == 2){
            cr = 3;
          }
          else{
            tela = 4
          }
        }
      }
      if((mouseX > 165 && mouseX < 201) && (mouseY > 271 && mouseY < 374)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if(cr == 3){
        tela = 8;
        cr = 0;
        t = 10;
      }
    }
   }
function fase4(){
    background(jogo);
  console.log(cr);
    if(frameCount%30==0){
      t-=1
    } 
    if(t > 8){
      background(acertou);
    }
    else if(t > 6){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(165, 89, 231-165, 174-89)
    }
    else if(t > 4){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(305, 89, 231-165, 174-89)
    }
    else if(t > 2){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(235, 271, 66, 85)
    }
    else if(t > 0){
      strokeWeight(4);
      stroke('red');
      noFill()
      rect(165, 180, 66, 85)
    }
    else{
      if((mouseX > 165 && mouseX < 165+66) && (mouseY > 89 && mouseY < 89+85)){
        if(mouseIsPressed){
          cr = 1;
        }
      }
      if((mouseX > 235 && mouseX < 235+66) && (mouseY > 89 && mouseY < 89+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 305+66) && (mouseY > 89 && mouseY < 89+85)){
        if(mouseIsPressed){
          if(cr == 1 || cr == 2){
            cr=2;
          }
          else{
            tela = 4
          }
        }
      }
      if((mouseX > 305 && mouseX < 305+66) && (mouseY > 180 && mouseY < 180+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 305 && mouseX < 305+66) && (mouseY > 271 && mouseY < 271+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 235 && mouseX < 235+66) && (mouseY > 180 && mouseY < 180+85)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if((mouseX > 165 && mouseX < 165+66) && (mouseY > 180 && mouseY < 180+85)){
        if(mouseIsPressed){
          if(cr == 3){
            cr = 4;
          }
          else{
            tela = 4
          }
        }
      }
      if((mouseX > 235 && mouseX < 235+66) && (mouseY > 271 && mouseY < 271+85)){
        if(mouseIsPressed){
          if(cr == 2 || cr == 3){
            cr = 3;
          }
          else{
            tela = 4
          }
        }
      }
      if((mouseX > 165 && mouseX < 201) && (mouseY > 271 && mouseY < 374)){
        if(mouseIsPressed){
          tela = 4;
        }
      }
      if(cr == 4){
        tela = 5;
      }
    }
   }

function draw() {
  telas()
  
  strokeWeight(0);
  stroke(0);
  fill(0);
  textSize(25);
  textStyle(NORMAL);
  //text("x: "+mouseX+", y: "+mouseY, 20, 300)
}
