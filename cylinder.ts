import {Circle} from "./circle";

export class Cylinder extends Circle{
    private _hight:number;
    constructor(hight:number, radius:number,color:string) {
        super(radius,color);
        this._hight=hight;
    }

    get hight(): number {
        return this._hight;
    }

    set hight(value: number) {
        this._hight = value;
    }
    getVolume(){
        return super.getArea()*this._hight;
    }
}