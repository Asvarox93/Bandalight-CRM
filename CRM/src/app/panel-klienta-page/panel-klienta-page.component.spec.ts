import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelKlientaPageComponent } from './panel-klienta-page.component';

describe('PanelKlientaPageComponent', () => {
  let component: PanelKlientaPageComponent;
  let fixture: ComponentFixture<PanelKlientaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelKlientaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelKlientaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
