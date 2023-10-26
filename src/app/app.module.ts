import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BindingModule } from './data-binding-module/binding.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BindingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
