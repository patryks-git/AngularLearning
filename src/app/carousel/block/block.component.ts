import { sanitizeIdentifier } from '@angular/compiler';
import { Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Block } from '../models/block.model';

const BLOCK = `.block { height: 6rem; width: 6rem; }`;

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  styles: [BLOCK]
})
export class BlockComponent {
  constructor(private sanitizer: DomSanitizer) {}
  @Input() block: Block;
  // @HostBinding('class.block') get style(): SafeStyle {
  //   return this.sanitizer.bypassSecurityTrustStyle(`height: ${this.block.sizeInRem}rem; width: ${this.block.sizeInRem}rem;`)
  // }
}

