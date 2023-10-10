import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoService } from './curso.service';

@NgModule({
  declarations: [CursosComponent],
  imports: [CommonModule],
  exports: [CursosComponent],
  providers: [CursoService],
})
export class CursosModule {}
