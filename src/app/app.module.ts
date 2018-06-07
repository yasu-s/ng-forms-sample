import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { CustomEventDirective } from './common/directives';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomEventDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
