class Form{
    constructor(){
        
        this.input=createInput("name")
        this.button=createButton("play")
        this.mesg=createElement("h2")
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.mesg.hide()
    }
    displays(){
        var title= createElement("h2")
        title.position(displayWidth/2-50,0)
        title.html("MULTIPLAYER TENNIS GAME")
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playercount+=1
            player.index=playercount
            player.update()
            player.updatecount(playercount)
            this.mesg.html("hello "+player.name )
            this.mesg.position(displayWidth/2-70,displayHeight/4)
        }
        )


    }


}