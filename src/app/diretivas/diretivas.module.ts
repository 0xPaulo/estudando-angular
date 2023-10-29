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
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { FundoAzulDirective } from '../shared/fundo-azul.directive';

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
    FundoAzulDirective,
    DiretivasCustomizadasComponent,
  ],
  exports: [DiretivasComponent],
  imports: [CommonModule, FormsModule],
})
export class DiretivasModule {}
