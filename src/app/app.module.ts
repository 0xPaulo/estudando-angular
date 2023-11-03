import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiretivasModule } from './diretivas/diretivas.module';
import { ServicoModule } from './servico/servico.module';
import { PipesModule } from './pipes-aula/pipes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DiretivasModule, ServicoModule, PipesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
