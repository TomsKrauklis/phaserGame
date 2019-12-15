/** @type {import("../typings/phaser")}}*/
import {LoadScene} from "./SCENES/LoadScene";
import {MenuScene} from "./SCENES/MenuScene";
let game = new Phaser.Game({
    width:800,
    height:600,
    scene:[
        LoadScene,MenuScene
    ],
    render:{
        pixelArt : true
    }
});