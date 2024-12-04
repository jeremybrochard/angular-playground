import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnDestroy {
  counter = 0;
  maxValue = 50;
  minValue = 0;

  destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  increment(): void {
    interval(1000).pipe(
      take(this.maxValue - this.counter),
      takeUntil(this.destroy$),
      tap(() => this.counter++)
    ).subscribe();
  }

  decrement(): void {
    interval(1000).pipe(
      take(this.counter),
      takeUntil(this.destroy$),
      tap(() => this.counter--)
    ).subscribe();
  }

  stop(): void {
    this.destroy$.next();
  }

}
