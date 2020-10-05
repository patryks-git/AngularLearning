import { Component } from '@angular/core';
import { ClockService } from './clock.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private clockService: ClockService) {}

  color: string;
  counter: number;
  
  blocks = [
    {'background-color': 'orange'},
    {'background-color': 'green'},
    {'background-color': 'lightblue'},
    {'background-color': 'red'}
  ];

  ngOnInit() {
    this.clockService.setInitValue(0);
    this.clockService.start(1000);
    this.clockService.clock.subscribe(x => {
        this.counter = x % 10;
    });
  }
}