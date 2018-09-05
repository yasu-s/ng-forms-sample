import { Component, ViewChild, DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';

import { CustomEventDirective } from './custom-event.directive';

describe('AppComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let inputEl: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CustomEventDirective,
                TestComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    });

    it('init', () => {
        fixture.detectChanges();
        expect(component.customEvent).toBeDefined();
    });

    it('keyup', fakeAsync(() => {
        // setup
        component.customEvent.debounceTime = 10;
        fixture.detectChanges();
        inputEl.nativeElement.value = 'hoge';

        // exercise
        inputEl.nativeElement.dispatchEvent( new KeyboardEvent('keyup'));
        tick(100);

        // verify
        expect(component.text).toBe('hoge');
    }));

});

@Component({
    selector: 'test-comp',
    template: `
        <input type="text" customEvent (keyupEx)="change($event)">
    `
})
class TestComponent {

    @ViewChild(CustomEventDirective)
    customEvent: CustomEventDirective;

    text: string = '';

    change(value: string): void {
        this.text = value;
    }
}
