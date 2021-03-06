import {
  Directive, ElementRef, Output, EventEmitter,
  OnInit, OnDestroy
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

/**
* カスタムイベントディレクティブ
*/
@Directive({
  selector: 'input[customEvent]'
})
export class CustomEventDirective implements OnInit, OnDestroy {

// #region fields

  /** debounceTime */
  debounceTime = 150;

  /** KeyUp拡張 */
  @Output()
  keyupEx = new EventEmitter<string>();

  /** DestoryEmitter */
  private readonly onDestroy$ = new EventEmitter();

// #endregion

// #region Init/Destroy

  /**
   * Constructor
   * @param el Element
   */
  constructor(private el: ElementRef) { }

  /**
   * OnInit
   */
  ngOnInit(): void {
    console.log('CustomEventDirective - ngOnInit');

    fromEvent<KeyboardEvent>(this.el.nativeElement, 'keyup')
      .pipe(
        takeUntil(this.onDestroy$),
        debounceTime(this.debounceTime),
        distinctUntilChanged()
      ).subscribe(event => {
        this.keyupEx.emit((<HTMLInputElement>event.target).value);
      });
  }

  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    console.log('CustomEventDirective - ngOnDestroy');
    this.onDestroy$.emit();
  }

// #endregion

}
