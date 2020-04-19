import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateDetailRoutingModule } from './state-detail-routing.module';
import { StateDetailComponent } from './state-detail.component';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/common/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StateDetailComponent],
  imports: [
    CommonModule,
    StateDetailRoutingModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StateDetailModule { }
