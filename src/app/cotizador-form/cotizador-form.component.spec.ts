import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizadorFormComponent } from './cotizador-form.component';

describe('CotizadorFormComponent', () => {
  let component: CotizadorFormComponent;
  let fixture: ComponentFixture<CotizadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
