import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboveBarComponent } from './above-bar/above-bar.component';

const routes: Routes = [
  { path: 'my-hello', component: MyHelloComponent },
  { path: 'two-way-bind', component: TwoWayBindComponent },
  { path: 'event-bind', component: EventBindComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'templates-variables', component: TemplateVariablesComponent },
  { path: 'comp-input', component: CompInputComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

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
    WelcomeComponent,
    PageNotFoundComponent,
    AboveBarComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
