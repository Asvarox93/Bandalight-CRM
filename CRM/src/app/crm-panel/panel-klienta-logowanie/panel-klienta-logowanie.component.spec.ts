import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelKlientaLogowanieComponent } from './panel-klienta-logowanie.component';

describe('PanelKlientaLogowanieComponent', () => {
  let component: PanelKlientaLogowanieComponent;
  let fixture: ComponentFixture<PanelKlientaLogowanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelKlientaLogowanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelKlientaLogowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
