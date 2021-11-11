import { Application } from "pixi.js";
import { Game } from "./ts/Game";

import "./css/main.css";

window.addEventListener('load', () => {
    const mainDiv = <HTMLDivElement>document.getElementById('main');
    const app = new Application({
        resizeTo: mainDiv,
        backgroundColor: 0x1099bb,
        antialias: true,
    });
    mainDiv.appendChild(app.view);

    const game = new Game(app);
});