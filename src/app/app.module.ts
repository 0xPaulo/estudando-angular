import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ToWayDataBindingComponent } from './to-way-data-binding/to-way-data-binding.component';
import { InputPropertiesComponent } from './input-properties/input-properties.component';
import { OutputPropertiesComponent } from './output-properties/output-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    EventBindingComponent,
    ToWayDataBindingComponent,
    InputPropertiesComponent,
    OutputPropertiesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
