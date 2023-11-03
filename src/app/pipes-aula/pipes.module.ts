import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesAulaComponent } from './pipes-aula.component';
import { CamelCasePipe } from '../pipes/camel-case.pipe';
import { CriandoPipeComponent } from './criando-pipe/criando-pipe.component';

@NgModule({
  declarations: [PipesAulaComponent, CamelCasePipe, CriandoPipeComponent],
  imports: [CommonModule],
  exports: [PipesAulaComponent],
})
export class PipesModule {}
