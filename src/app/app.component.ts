import {Component, OnInit } from '@angular/core';
import { Block } from './block.model';
import { ClockService } from './clock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private clockService: ClockService) {
    this.blocks = [
      new Block('orange'),
      new Block('green'),
      new Block('blue'),
      new Block('red'),
      new Block('cyan'),
      new Block('pink')
    ];
  }

  blocks: Block[];

  ngOnInit() {
    this.clockService.setInitValue(0);
    this.clockService.start(3000);
  }
}


export function hasValue(object: any): boolean {
  return object !== null || object !== undefined;
}