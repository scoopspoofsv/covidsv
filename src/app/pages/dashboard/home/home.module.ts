import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContactInfoComponent } from './contact-info/contact-info.component'
import { NewItemComponent } from './new-item/new-item.component';
import { SharedModule } from 'src/app/common/modules/shared/shared.module';
import { MaterialModule } from 'src/app/common/modules/material/material.module';





@NgModule({
  declarations: [HomeComponent, ContactInfoComponent, NewItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
