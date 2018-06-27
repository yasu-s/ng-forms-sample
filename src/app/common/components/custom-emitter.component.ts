import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'custom-emitter-component',
    template: `
        <ul>
            <li *ngFor="let num of list"
                (click)="onClick(num)" [style.background-color]="num === value ? 'yellow' : 'white'">
                {{ num }}
            </li>
        </ul>
    `
})
export class CustomEmitterComponent {

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
