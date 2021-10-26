import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(private length: number, private width: number) {
        super();
    }

    public area():number {
        return this.length * this.width;
    }

    public peri(): number {
        return 2 * (this.length + this.width);
    }
}