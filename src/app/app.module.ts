import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyHelloComponent } from './my-hello/my-hello.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { TemplateBindingParseResult } from '@angular/compiler';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { CompInputComponent } from './comp-input/comp-input.component';
import { SimpleTableComponent } from './comp-input/simple-table/simple-table.component';
import { SecondTableComponent } from './comp-input/second-table/second-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHelloComponent,
    TwoWayBindComponent,
    EventBindComponent,
    TemplateVariablesComponent,
    StructuralDirectivesComponent,
    CompInputComponent,
    SimpleTableComponent,
    SecondTableComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
