export class Block {
    constructor(color: string) { 
      this.translate = 0; 
      this.color = color;
    }
    
    set color(value: string) {this.style.background = value};
    set translate(value: number) {this.style.transform = `translateX(${value}rem)`};
    isVisible?: boolean = true;
    style? = {
      background: '',
      transform: ''
    };
}