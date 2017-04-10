import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPanelGlownyComponent } from './crm-panel-glowny.component';

describe('CrmPanelGlownyComponent', () => {
  let component: CrmPanelGlownyComponent;
  let fixture: ComponentFixture<CrmPanelGlownyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPanelGlownyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPanelGlownyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
