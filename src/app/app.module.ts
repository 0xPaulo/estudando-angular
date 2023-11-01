import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiretivasModule } from './diretivas/diretivas.module';
import { ServicoModule } from './servico/servico.module';
import { CursoService } from './servico/curso/curso.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DiretivasModule, ServicoModule],
  providers: [CursoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
