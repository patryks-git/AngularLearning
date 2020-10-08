import {Component, OnInit, Optional } from '@angular/core';
import { ClockService } from './clock.service';

const block = `.block { height: 6rem; width: 6rem; }`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [block]
})
export class AppComponent implements OnInit {
  constructor(private clockService: ClockService) {}


  color: string;
  counter: number;

  blocks = [
    new Block('orange'),
    new Block('green'),
    new Block('blue'),
    new Block('red'),
    new Block('cyan'),
    new Block('pink')
  ];

  ngOnInit() {
    this.clockService.setInitValue(0);
    this.clockService.start(3000);
    this.animate();
  }

  animate() {
    this.clockService.clock.subscribe(x => {
      this.counter = x % 6 - 4;
      this.blocks.forEach(b => {
        b.translate = this.counter*6;
      })
  });
  }
}

export class Block {
  constructor(color: string) { this.translate = 0; this.color = color;}

  set color(value: string) {this.style.background = value};
  set translate(value: number) {this.style.transform = `translateX(${value}rem)`};
  isVisible?: boolean = true;
  style? = {
    background: '',
    transform: ''
  };
}