import { Component, OnInit } from '@angular/core';
import { Block } from './models/block.model';
import { ClockService } from './services/clock.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
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