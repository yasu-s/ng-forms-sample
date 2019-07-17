export {};

import { NgModel } from '@angular/forms';

declare module '@angular/forms' {

    interface NgModel {
        /**
         * NgModel.touched or dirty
         * @returns touched or dirty
         */
        touchedOrDirty(): boolean;

        /**
         * NgModel invalid && (touched || dirty)
         * @returns invalid && (touched || dirty)
         */
        invalidAndEdited(): boolean;
    }
}

NgModel.prototype.touchedOrDirty = function() {
    const control = this as NgModel;
    return control.touched || control.dirty;
};

NgModel.prototype.invalidAndEdited = function() {
    const control = this as NgModel;
    return (control.touched || control.dirty) && control.invalid;
};
