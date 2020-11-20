import { BehaviorSubject, interval, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ClockService {

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
  private _intervalInMs: number;
  private _isEmitting: boolean;
  private _clockSubject: BehaviorSubject<number>;

  clock: Observable<number>;
  get intervalInMs(): number { return this._intervalInMs; }
  
  start(intervalInMs: number) {
    if (!this._started) {
      this._intervalInMs = intervalInMs;
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
