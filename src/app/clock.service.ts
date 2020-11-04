import { BehaviorSubject, interval, Observable } from "rxjs";
import { tap } from "rxjs/operators";

export interface ClockService {
  clock: Observable<number>;
  start(intervalInMs: number): void;
  pause(): void;
  stopPause(): void;
  setInitValue(value: number): void;
}

export function createClockService(): ClockService {
  let _event: number = 1;
  let _initValue: number = 0;
  let _isEmitting: boolean = true;
  let _clockSubject = new BehaviorSubject<number>(_initValue);

  let clock: Observable<number> = _clockSubject.asObservable();
  
  let start = (intervalInMs: number) => {
    interval(intervalInMs).pipe(
      tap(v => _isEmitting ? _clockSubject.next(_event++) : null))
      .subscribe();
  }

  let pause = () => {
    _isEmitting = false;
  }

  let stopPause = () => {
    _isEmitting = true;
  }

  let setInitValue = (value: number) => {
    _initValue = value;
  }

  return { clock, start, pause, stopPause, setInitValue}
}
