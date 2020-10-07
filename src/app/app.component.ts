import { Component } from '@angular/core';
import { ClockService } from './clock.service';

const BLOCKS = [
  {background: 'orange', transform: '', transition: 'translateX 1s ease-in-out 1s'},
  {background: 'green', transform: '', transition: 'translateX 1s ease-in-out 1s'},
  {background: 'lightblue', transform: '', transition: 'translateX 1s ease-in-out 1s'},
  {background: 'red', transform: '', transition: 'translateX 1s ease-in-out 1s'}
];

const block = `.block { height: 7rem; width: 7rem; }`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [block]
})
export class AppComponent {
  constructor(private clockService: ClockService) {}

  color: string;
  counter: number;
  
  blocks = [
    {background: 'orange', transform: ''},
    {background: 'green', transform: ''},
    {background: 'lightblue', transform: ''},
    {background: 'red', transform: '' },
    {background: 'cyan', transform: '' },
    {background: 'pink', transform: '' }
  ];

  ngOnInit() {
    this.clockService.setInitValue(0);
    this.clockService.start(1000);
    this.clockService.clock.subscribe(x => {
        this.counter = x % 15;
        this.blocks.forEach(b => b.transform = `translateX(${this.counter}rem)`)
    });
  }
}