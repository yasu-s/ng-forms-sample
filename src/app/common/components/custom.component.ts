import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'custom-component',
    template: `
        <ul>
            <li *ngFor="let num of list"
                (click)="onClick(num)" [style.background-color]="num === value ? 'yellow' : 'white'">
                {{ num }}
            </li>
        </ul>
    `,
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CustomComponent),
          multi: true
        }
    ]
})
export class CustomComponent implements ControlValueAccessor {

// #region fields

    /** */
    value: number = 0;

    /** */
    list: number[] = [1, 2, 3, 4, 5];

    /** */
    private fnChange = (_: any) => {};

    /** */
    private fnTouched = () => {};

// #endregion

// #region methods

    /**
     *
     * @param value
     */
    writeValue(value: any): void {
        this.value = value || 0;
    }

    registerOnChange(fn: any): void {
        this.fnChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.fnTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {

    }

    /**
     *
     * @param num
     */
    onClick(num: number): void {
        this.value = num;
        this.fnChange(num);
    }

// #endregion

}
