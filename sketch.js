var firebase
var player
var gme
var gamestate=0
var p1,p2,ground,ball
var gme
var playercount,allplayers,plyrank=0
var base
var form
function preload() {
    p1=loadImage("../images/player1.png")
   p2=loadImage('../images/player2.png')
   ground =loadImage('../images/court-removebg-preview.png')
  // ball1=loadImage('../images/ball.png')
    
    
}









function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
   base=firebase.database()
    gme=new Game()
    gme.getstate()
    gme.Start()
    

}





function draw(){
      
    if(playercount===2 && gamestate===0){
        gme.updatestate(1)
    }
    if(gamestate===1){
        gme.play()
    }
    //if(gamestate===2){
    //    gme.end()
   // }
    
    
    
 

}