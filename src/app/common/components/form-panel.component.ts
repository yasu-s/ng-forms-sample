import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'custom-form-panel',
    template: `
        <form #form="ngForm">
            <input type="text" name="memo" required [(ngModel)]="memo" #memoTxt="ngModel">
            <ul>
                <li *ngIf="form.valid">form.valid</li>
                <li *ngIf="form.invalid">form.invalid</li>
                <li *ngIf="form.touched">form.touched</li>
                <li *ngIf="form.untouched">form.untouched</li>
                <li *ngIf="form.pristine">form.pristine</li>
                <li *ngIf="form.dirty">form.dirty</li>
                <li>memoTxt.touchedOrDirty {{ memoTxt.touchedOrDirty() ? 'true' : 'false' }}</li>
            </ul>
        </form>
    `,
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.None
})
export class FormPanelComponent {

// #region fields

    /** */
    @Input() memo: string;

    /**  */
    @Output()
    memoChange = new EventEmitter<string>();

// #endregion

}
