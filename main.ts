import {Circle} from "./circle";
import {Cylinder} from "./cylinder";

let circle=new Circle(3.5,'red');
let cylinder=new Cylinder(10,3.5,'yellow');

console.log(circle.getArea())
console.log(cylinder.getVolume())