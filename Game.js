class Game {
    constructor(){

        
    }
    getstate(){
       var sta=base.ref("gamestate")
       sta.on('value',(data)=>{
       gamestate=data.val()     

       })


    }

    
    async Start(){
        if(gamestate===0){
            player=new Player()
            var playercont=await base.ref("playercount").once('value')
            if(playercont.exists()){
                playercount=playercont.val()
                player.getcount()
              
              }
              form=new Form()
              form.displays()
  
        }
        player1=createSprite(100,100,10,10)
        player1.addImage(p1)
        player2=createSprite(100,100,10,10)
        player2.addImage(p2)
        court=createSprite(100,100,10,10)
        court.addImage(ground)
        ball=createSprite(100,100,10,10)
        ball.addImage(ball1)
    }

    
}
