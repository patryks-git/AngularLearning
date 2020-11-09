import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../app.component';
import { ClockService } from '../clock.service';

const BLOCK = `.block { height: 6rem; width: 6rem; }`;

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  styles: [BLOCK]
})
export class BlockComponent {
  constructor() { }
  @Input() block: Block;
}

