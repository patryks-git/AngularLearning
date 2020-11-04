import { Component, Input, OnInit } from '@angular/core';
import { Block } from '../app.component';

const BLOCK = `.block { height: 6rem; width: 6rem; }`;

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  styles: [BLOCK]
})
export class BlockComponent implements OnInit, BlockComponentBase {
  constructor() { }

  @Input() set block(value: Block) {
    debugger;
  }

  ngOnInit(): void {
  }

}

export interface BlockComponentBase {
  block: Block;
}
