import { Spine } from "pixi-spine";
import {
  Application,
  Container,
  Loader,
  Texture,
  AnimatedSprite,
} from "pixi.js";
import { gsap } from "gsap";

export class Game {
  private readonly stage: Container;
  private frames: { [key: string]: string[] } = {
    idle: [
      "idle-16.png",
      "idle-17.png",
      "idle-18.png",
      "idle-19.png",
      "idle-20.png",
      "idle-21.png",
      "idle-22.png",
      "idle-23.png",
      "idle-24.png",
      "idle-25.png",
    ],
  };
  constructor(private app: Application) {
    this.stage = app.stage;
    this.preload();
    this.stage.interactive = true;
  }
  preload(): void {
    this.app.loader
      .add("goku", "assets/images/gokublue.jpg")
      .add("dino", "assets/animation/dino.json")
      .add("alien", "assets/spine/alien-ess.json")
      .load(this.setup.bind(this));
  }

  setup(loader: Loader, resources: any): void {
    console.log(loader, resources);
    const dino = new AnimatedSprite(this.getAnimations("dino", "walk"));
    dino.animationSpeed = 0.25;
    this.stage.addChild(dino);
    dino.play();

    gsap.to(dino, {
      x: 800,
      duration: 5,
      onComplete: () => {
        dino.textures = this.getAnimations("dino", "idle");
        dino.play();
      },
    });

    const alienSpineData = resources.alien.spineData;
    let alien: Spine;
    if (alienSpineData) {
      alien = new Spine(alienSpineData);
      alien.x = 600;
      alien.y = 500;
      this.stage.addChild(alien);
      alien.state.setAnimation(0, "run", true);
      alien.state.timeScale = 0.25;
      alien.stateData.setMix("run", "jump", 0.2);
      alien.stateData.setMix("jump", "run", 0.2);
      alien.stateData.setMix("run", "hit", 0.2);
      alien.stateData.setMix("hit", "death", 0.2);
    }
    let alienFrameCounter = 0;
    this.stage.on("click", () => {
      const animIds = ["idle", "walk", "jump", "run", "dead"];
      const randomId = animIds[Math.floor(Math.random() * animIds.length)];
      console.log("assigning ", randomId);
      dino.textures = this.getAnimations("dino", randomId);
      dino.play();

      const alienAnimIds = ["run", "hit", "death"];
      alien.state.setAnimation(0, alienAnimIds[alienFrameCounter], false);
      alienFrameCounter++;
      if (alienFrameCounter >= alienAnimIds.length) {
        alienFrameCounter = 0;
      }
    });
  }

  getAnimations(resourceId: string, frameId: string): Texture[] {
    const textures: Texture[] = [];
    Object.keys(this.app.loader.resources[resourceId].textures).forEach(
      (key) => {
        // if(this.frames[frameId].includes(key)){
        if (key.includes(frameId)) {
          textures.push(this.app.loader.resources[resourceId].textures[key]);
        }
      }
    );
    return textures;
  }
}
