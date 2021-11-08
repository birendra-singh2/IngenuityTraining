import { Application, Sprite, Texture } from "pixi.js";
import './main.css';
window.addEventListener('load', ()=>{
    const app = new Application({
        width: 800,
        height: 600,
        antialias: true,
        backgroundColor: 0x1099bb,
        resolution: 1
    });
    document.querySelector('#app').appendChild(app.view);
    const loader = <HTMLDivElement>document.querySelector('#loader');
    app.loader
        .add('bike','images/BIKE7.JPG')
        .add('lady', 'images/beauty-colours-disney-pocahontas-princess-wallpaper-favim-com-wallpaper-1082839907.jpg')
        .load(setup);
    app.loader.onProgress.add(()=>{
        loader.style.width = `${app.loader.progress}%`;
        console.log(app.loader.progress);
    });
    function setup() {
        console.log('asset loaded', app.loader.resources);
        const logo = new Sprite(app.loader.resources['bike'].texture);
        logo.anchor.set(0.5);
        logo.scale.set(0.5);
        logo.x = app.screen.width / 2;
        logo.y = app.screen.height / 2;
        app.stage.addChild(logo);
    }
});
