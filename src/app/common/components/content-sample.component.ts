import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'content-sample-component',
    template: `
        <ng-content></ng-content>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class ContentSampleComponent {

// #region fields

    /** */
    private _value: number = 0;

    /** */
    @Input()
    get value(): number { return this._value; }
    set value(value: number) {
        this._value = value;
    }

    /**  */
    @Output()
    valueChange = new EventEmitter<number>();

    /** */
    list: number[] = [1, 2, 3];

// #endregion

// #region methods

    /**
     *
     * @param num
     */
    onClick(num: number): void {
        this.value = num;
        this.valueChange.emit(num);
    }

// #endregion

}
