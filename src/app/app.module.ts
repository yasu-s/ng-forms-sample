import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

import { CustomEmitterComponent, CustomComponent } from './common/components';
import { CustomEventDirective } from './common/directives';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomEventDirective,
        CustomEmitterComponent,
        CustomComponent,
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
