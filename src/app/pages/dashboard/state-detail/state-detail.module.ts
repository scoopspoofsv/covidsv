import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateDetailRoutingModule } from './state-detail-routing.module';
import { StateDetailComponent } from './state-detail.component';


@NgModule({
  declarations: [StateDetailComponent],
  imports: [
    CommonModule,
    StateDetailRoutingModule
  ]
})
export class StateDetailModule { }
