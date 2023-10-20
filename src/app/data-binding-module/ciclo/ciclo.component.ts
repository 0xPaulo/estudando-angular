import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss'],
})
export class CicloComponent
  implements
    OnChanges,
    OnDestroy,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() valorInicial: number = 10;

  private log(msg: string) {
    console.log(msg);
  }
  constructor() {
    this.log('construtor');
  }
  ngDoCheck(): void {
    this.log('Do check');
  }
  ngAfterContentInit(): void {
    this.log('After content init');
  }
  ngAfterContentChecked(): void {
    this.log('After content checked');
  }
  ngAfterViewInit(): void {
    this.log('After view init');
  }
  ngAfterViewChecked(): void {
    this.log('After view checked');
  }
  ngOnInit() {
    this.log('init');
  }
  ngOnChanges() {
    this.log('on Changes');
  }
  ngOnDestroy() {
    this.log('destruiu');
  }
}
