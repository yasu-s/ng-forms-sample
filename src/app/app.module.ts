import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { CustomEmitterComponent, CustomComponent, FormPanelComponent, FormPanel2Component } from './common/components';
import { CustomEventDirective, CustomNumberDirective } from './common/directives';
import { AppComponent } from './app.component';
import './common/ext';

@NgModule({
    declarations: [
        AppComponent,
        CustomEventDirective,
        CustomNumberDirective,
        CustomEmitterComponent,
        CustomComponent,
        FormPanelComponent,
        FormPanel2Component,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatTabsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
