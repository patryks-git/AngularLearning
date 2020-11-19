export class Block {
    constructor(color: string) { 
      this.size = 6;
      this.translate = 0; 
      this.color = color;
    }
    private set color(value: string) {this.style.background = value};
    private _translate: number;
    
    set translate(value: number) {this.style.transform = `translateX(${value}rem)`; this._translate = value;};
    get translate() { return this._translate;}
    size: number; 

    style? = {
      background: '',
      transform: '',
    };
}