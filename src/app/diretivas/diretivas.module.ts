import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivasComponent } from './diretivas.component';
import { DiretivasNgIfComponent } from './diretivas-ng-if/diretivas-ng-if.component';
import { DiretivasNgSwitchComponent } from './diretivas-ng-switch/diretivas-ng-switch.component';
import { DiretivasNgForComponent } from './diretivas-ng-for/diretivas-ng-for.component';
import { DiretivaNgClassComponent } from './diretiva-ng-class/diretiva-ng-class.component';

@NgModule({
  declarations: [
    DiretivasComponent,
    DiretivasNgIfComponent,
    DiretivasNgSwitchComponent,
    DiretivasNgForComponent,
    DiretivaNgClassComponent,
  ],
  exports: [DiretivasComponent],
  imports: [CommonModule],
})
export class DiretivasModule {}
