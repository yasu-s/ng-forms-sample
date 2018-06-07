import {
    Directive, ElementRef, Input, Output, EventEmitter,
    OnInit, OnDestroy
} from '@angular/core';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * カスタムイベントディレクティブ
 */
@Directive({
    selector: 'input[customEvent]'
})
export class CustomEventDirective implements OnInit, OnDestroy {

// #region fields

    /** KeyUp Subscription */
    subscription: Subscription;

    /** debounceTime */
    debounceTime = 300;

    /** KeyUp拡張 */
    @Output('keyupEx')
    keyupEx = new EventEmitter<string>();

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

        this.subscription = fromEvent<KeyboardEvent>(this.el.nativeElement, 'keyup')
            .pipe(
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

        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

// #endregion

}
