import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';
import { DiretivaNgStyleComponent } from './diretiva-ng-style/diretiva-ng-style.component';
import { DiretivasNgForComponent } from './diretivas-ng-for/diretivas-ng-for.component';
import { DiretivasNgIfComponent } from './diretivas-ng-if/diretivas-ng-if.component';
import { DiretivasNgSwitchComponent } from './diretivas-ng-switch/diretivas-ng-switch.component';
import { DiretivasComponent } from './diretivas.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';

@NgModule({
  declarations: [
    DiretivasComponent,
    DiretivasNgIfComponent,
    DiretivasNgSwitchComponent,
    DiretivasNgForComponent,
    DiretivaNgClassComponent,
    DiretivaNgStyleComponent,
    OperadorElvisComponent,
    ExemploNgContentComponent,
  ],
  exports: [DiretivasComponent],
  imports: [CommonModule, FormsModule],
})
export class DiretivasModule {}
