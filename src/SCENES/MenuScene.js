import {CST} from "../CST"

export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key:CST.SCENES.MENU
        })
    }
    init(data){
        console.log(data);
        console.log("Got it");
    }
    create(){
        let menuBg = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, "logo").setDepth(1)
       
        
        let titleBg = this.add.image(0,0,"title_bg").setOrigin(0).setDepth(0);
        //titleBg.setScale(2)

        let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play_button").setDepth(1)

        let optionsButton = this.add.image(this.game.renderer.width / 2,this.game.renderer.height / 2 + 100, "options_button").setDepth(1)

        let hoverSprite = this.add.sprite(100,100,"cat");
        hoverSprite.setScale(2)


        playButton.setInteractive();
        playButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true)
            hoverSprite.x = playButton.x - playButton.width;
            hoverSprite.y = playButton.y;
        })
        playButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
            console.log("Oooooutttttt");
        })
         playButton.on("pointerup", ()=>{
            console.log("OPEEEEEN");
        })

        optionsButton.setInteractive();
        optionsButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true)
            hoverSprite.x = optionsButton.x - optionsButton.width;
            hoverSprite.y = optionsButton.y;
        })
        optionsButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
            console.log("Oooooutttttt");
        })
        
    }
}