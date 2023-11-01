import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [ServicoComponent, CursoComponent],
  imports: [CommonModule],
  exports: [ServicoComponent],
})
export class ServicoModule {}
