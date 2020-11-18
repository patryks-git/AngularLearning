import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class Block {
    constructor(color: string) { 
      this.translate = 0; 
      this.color = color;
    }
    private set color(value: string) {this.style.background = value};
    private _translate;
    
    set translate(value: number) {this.style.transform = `translateX(${value}rem)`; this._translate = value;};
    get translate() { return this._translate;}
    set isVisible(value: boolean) { this.style.visibility = value ? 'visible' : 'hidden' }

    style? = {
      background: '',
      transform: '',
      visibility: 'visible'
    };
}