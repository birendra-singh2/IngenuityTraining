import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    public area(): number{
        return Math.PI * this.radius * this.radius;
    }

    public peri() : number {
        return Math.PI * this.radius *2;
    }
}