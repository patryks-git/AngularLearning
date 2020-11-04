import {Component, OnInit, Optional, ViewChild } from '@angular/core';
import { ClockService, createClockService } from './clock.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {
    this.clockService = createClockService();
    this.blocks = [
      new Block('orange'),
      new Block('green'),
      new Block('blue'),
      new Block('red'),
      new Block('cyan'),
      new Block('pink')
    ];
  }

  clockService: ClockService;
  counter: number;
  blocks: Block[];

  ngOnInit() {
    this.clockService.setInitValue(0);
    this.clockService.start(1000);
    this.animate();
  }

  animate() {
    this.clockService.clock.subscribe(x => {
      this.counter = x % 10;
      // this.blocks.forEach(b => {
      //   b.translate = this.counter*6;
      // })
  });
  }
}

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