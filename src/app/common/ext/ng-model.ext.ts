export {};

import { NgControl  } from '@angular/forms';

declare module '@angular/forms' {

    interface NgControl  {
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

NgControl .prototype.touchedOrDirty = function() {
    const control = this as NgControl ;
    return control.touched || control.dirty;
};

NgControl .prototype.invalidAndEdited = function() {
    const control = this as NgControl ;
    return (control.touched || control.dirty) && control.invalid;
};
