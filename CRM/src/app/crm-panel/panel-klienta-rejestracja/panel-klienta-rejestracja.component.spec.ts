import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelKlientaRejestracjaComponent } from './panel-klienta-rejestracja.component';

describe('PanelKlientaRejestracjaComponent', () => {
  let component: PanelKlientaRejestracjaComponent;
  let fixture: ComponentFixture<PanelKlientaRejestracjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelKlientaRejestracjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelKlientaRejestracjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
