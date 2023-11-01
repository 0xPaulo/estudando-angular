import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { CursoComponent } from './curso/curso.component';
import { CursoService } from './curso/curso.service';

@NgModule({
  declarations: [ServicoComponent, CursoComponent],
  imports: [CommonModule],
  providers: [CursoService],
  exports: [ServicoComponent],
})
export class ServicoModule {}
