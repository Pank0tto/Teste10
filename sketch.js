//crie as VAR para armazenar
var trex, trexImg, edges;

function preload(){
   trexImg = loadAnimation("trex1.png", "trex2.png", "trex3.png") //carregue a animação
}

function setup(){
   //cria o canvas
   createCanvas(600, 200)

   //crie a srite do trex
   trex = createSprite(50, 160, 10, 10)
   
   //adicione a animação
   trex.addAnimation("trexCorrendo", trexImg)

   //crie as bordas
   edges = createEdgeSprites()
} 

function draw(){
  background("white"); //fundo
  drawSprites(); //desenhe a sprite

  if(keyDown("space")){//condicional para o salto quando apertar espaço
   trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY + 0.5
  //coloque a gravidade
   
  //coloque a colisão com a borda inferior
  trex.collide(edges[3])
}
