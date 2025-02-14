import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { CompInputComponent } from './comp-input/comp-input.component';
import { SimpleTableComponent } from './comp-input/simple-table/simple-table.component';
import { SecondTableComponent } from './comp-input/second-table/second-table.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboveBarComponent } from './above-bar/above-bar.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { SimpleTableNullComponent } from './simple-table-null/simple-table-null.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { WelcomeComponent } from './bind-examples/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'bind-examples',
    loadChildren: () =>
      import('./bind-examples/bind-examples.module').then(
        (m) => m.BindExamplesModule
      ),
  },
  { path: '', component: WelcomeComponent },
  { path: 'structural-directives', component: StructuralDirectivesComponent },
  { path: 'templates-variables', component: TemplateVariablesComponent },
  { path: 'comp-input', component: CompInputComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'chuck-norris', component: ChuckNorrisComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateVariablesComponent,
    StructuralDirectivesComponent,
    CompInputComponent,
    SimpleTableComponent,
    SecondTableComponent,
    PageNotFoundComponent,
    AboveBarComponent,
    ChuckNorrisComponent,
    TemplateFormComponent,
    SimpleTableNullComponent,
    ReactiveFormsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
