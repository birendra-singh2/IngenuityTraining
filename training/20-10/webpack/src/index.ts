import {Rectangle} from './ts/Rectangle';
import {Circle} from './ts/Circle';

const rect = new Rectangle(10,20);

console.log('Area', rect.area());
console.log('Perimeter', rect.peri());

const circ = new Circle(10);

console.log('Area', circ.area());
console.log('Perimeter', circ.peri());