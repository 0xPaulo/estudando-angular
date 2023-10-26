import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CicloComponent } from './ciclo/ciclo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';
import { ToWayDataBindingComponent } from './to-way-data-binding/to-way-data-binding.component';
import { BindingComponent } from './binding.component';

@NgModule({
  declarations: [
    BindingComponent,
    CicloComponent,
    ToWayDataBindingComponent,
    EventBindingComponent,
    InputPropertiesComponent,
    DataBindingComponent,
    OutputPropertiesComponent,
  ],
  exports: [],
  imports: [CommonModule, FormsModule, BrowserModule],
})
export class BindingModule {}
