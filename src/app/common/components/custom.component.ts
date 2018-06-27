import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'custom-component',
    template: `
    `
})
export class CustomComponent implements ControlValueAccessor {

// #region fields

// #endregion

// #region methods

    writeValue(obj: any): void {

    }

    registerOnChange(fn: any): void {

    }

    registerOnTouched(fn: any): void {

    }

    setDisabledState(isDisabled: boolean): void {

    }

// #endregion

}
