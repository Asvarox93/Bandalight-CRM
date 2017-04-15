import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPulpitComponent } from './panel-pulpit.component';

describe('PanelPulpitComponent', () => {
  let component: PanelPulpitComponent;
  let fixture: ComponentFixture<PanelPulpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPulpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPulpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
