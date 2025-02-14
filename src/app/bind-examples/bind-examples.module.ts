import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MyHelloComponent } from './my-hello/my-hello.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
  { path: 'my-hello', component: MyHelloComponent },
  { path: 'two-way-bind', component: TwoWayBindComponent },
  { path: 'event-bind', component: EventBindComponent },
];

@NgModule({
  declarations: [
    MyHelloComponent,
    TwoWayBindComponent,
    EventBindComponent,
    WelcomeComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class BindExamplesModule {}
