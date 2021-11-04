class Player{
    constructor(){
        this.name=null
        this.score=null

    }
    getcount(){
        var ref=base.ref('playercount')
        ref.on("value",(data)=>{
            playercount=data.val()

        })
    }
    updatecount(count){
        
        base.ref("/").update({playercount:count})  //updates playercount

    }
    update(){
        var playref=base.ref("players/player"+this.index)
        playref.set({
            name:this.name,
            score:this.score
           


        })

   

}
}