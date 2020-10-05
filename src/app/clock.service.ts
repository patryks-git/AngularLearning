import { Injectable } from "@angular/core";
import { BehaviorSubject, interval, Observable } from "rxjs";
import { tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ClockService {
  constructor() {
    this.clockSubject = new BehaviorSubject<number>(this._initValue);
    this.clock = this.clockSubject.asObservable();
  }
  private clockSubject: BehaviorSubject<number>;
  private _event: number = 1;
  private _initValue: number = 0;
  private _isEmitting: boolean = true;
  
  clock: Observable<number>

  start(intervalInMs: number) {
    interval(intervalInMs).pipe(
      tap(v => this._isEmitting ? this.clockSubject.next(this._event++) : null))
      .subscribe();
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
