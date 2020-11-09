import { BehaviorSubject, interval, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Injectable } from '@angular/core';


export interface ClockService {
  clock: Observable<number>;
  start(intervalInMs: number): void;
  pause(): void;
  stopPause(): void;
  setInitValue(value: number): void;
}

@Injectable({providedIn: 'root'})
export class ClockService implements ClockService {

  constructor() {
    this._event = 1;
    this._initValue = 0;
    this._isEmitting= true;
    this._clockSubject = new BehaviorSubject<number>(this._initValue);
    this.clock = this._clockSubject.asObservable();
  }
  private _started: boolean = false;
  private _event: number;
  private _initValue: number;
  private _isEmitting: boolean;
  private _clockSubject: BehaviorSubject<number>;

  clock: Observable<number>;
  
  start(intervalInMs: number) {
    if (!this._started) {
      interval(intervalInMs).pipe(
        tap(v => this._isEmitting ? this._clockSubject.next(this._event++) : null))
        .subscribe();
        this._started = true;
    }
    else throw Error('Clock was started');
  }

  pause() {
    this._isEmitting = false;
  }

  stopPause() {
    this._isEmitting = true;
  }

  setInitValue(value: number) {
    this._initValue = value;
  }
}

// export function createClockService(): ClockService {
//   let _event: number = 1;
//   let _initValue: number = 0;
//   let _isEmitting: boolean = true;
//   let _clockSubject = new BehaviorSubject<number>(_initValue);

//   let clock: Observable<number> = _clockSubject.asObservable();
  
//   let start = (intervalInMs: number) => {
//     interval(intervalInMs).pipe(
//       tap(v => _isEmitting ? _clockSubject.next(_event++) : null))
//       .subscribe();
//   }

//   let pause = () => {
//     _isEmitting = false;
//   }

//   let stopPause = () => {
//     _isEmitting = true;
//   }

//   let setInitValue = (value: number) => {
//     _initValue = value;
//   }

//   return { clock, start, pause, stopPause, setInitValue}
// }
