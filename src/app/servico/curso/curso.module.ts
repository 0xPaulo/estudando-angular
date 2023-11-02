import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from 'src/app/service/curso.service';
import { CursoComponent } from './curso.component';

@NgModule({
  declarations: [CursoComponent],
  imports: [CommonModule],
  // providers: [CursoService],
  exports: [CursoComponent],
})
export class CursoModule {}
