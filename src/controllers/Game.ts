import * as PIXI from "pixi.js";
import { Container } from "pixi.js";

export class Game extends Container {
    static GAME_WIDTH = 320;
    static GAME_HEIGHT = 568;

    private static _instance: Game;

    public app: PIXI.Application | undefined;

    constructor() {
        super();

        window.onload = (): void => {
        };

        this.createRenderer();
        this.addAssets();
        this.startLoadingAssets();

        console.log("Game Constructed");
    }

    public static getInstance(): Game {
        if (!Game._instance) {
            Game._instance = new Game();
        }

        return Game._instance;
    }

    private createRenderer(): void {
        this.app = new PIXI.Application({
            backgroundColor: 0x001320
        });

        document.body.appendChild(this.app.view);

        console.log("Renderer Created");
    }

    private addAssets(): void {
        // PIXI.Loader.shared.add("sheetData", "../assets/game.json", {
        PIXI.Loader.shared.add("sheetData", "../assets/spritesheet.json", {
            crossOrigin: "*"
        });
        console.log("Assets added");
    }

    private startLoadingAssets(): void {
        PIXI.Loader.shared.onComplete.add(() => {
            this.onAssetsLoaded();
        });
        PIXI.Loader.shared.load();
        console.log("Loading assets");
    }

    private onAssetsLoaded(): void {
        // None of these work
        // let sprite = new PIXI.Sprite(PIXI.Texture.from("logo.png"));
        let sprite = new PIXI.Sprite(PIXI.Texture.from("background.png"));
        let sheet = PIXI.Loader.shared.resources["sheetData"];

        this.app.stage.addChild(sprite);

        console.log("AssetsLoaded");
    }
    
}

