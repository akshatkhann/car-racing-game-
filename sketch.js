var canvas,backgroundimage,allplayers,car1,car2,car3,car4,cars;
var gameState=0;
var playerCount,database,form,game,player;
function  setup(){
canvas=createCanvas(displayWidth,displayHeight)
database=firebase.database()
game = new Game();
game.getstate();
game.start();

}    
function  draw(){
if(playerCount===4){
game.update(1)

}
if(gameState===1){
clear()
game.play()

}


}
    






