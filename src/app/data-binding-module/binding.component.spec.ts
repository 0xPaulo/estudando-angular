import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingModuleComponent } from './binding.component';

describe('DataBindingModuleComponent', () => {
  let component: DataBindingModuleComponent;
  let fixture: ComponentFixture<DataBindingModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingModuleComponent],
    });
    fixture = TestBed.createComponent(DataBindingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
