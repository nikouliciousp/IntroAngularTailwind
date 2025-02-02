import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyHelloComponent } from './my-hello/my-hello.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHelloComponent,
    TwoWayBindComponent,
    EventBindComponent,
    StructuralDirectivesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
