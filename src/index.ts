import * as PIXI from "pixi.js";
import { Game } from "./controllers/Game";


export class Main {  

    protected game!: Game;

    // Scale rate variables
    private _scale: number = window.devicePixelRatio;

    constructor() {
        
        this.initialize();
    }      

    private initialize(): void {
        this.game = Game.getInstance();
        
    }

}

new Main();