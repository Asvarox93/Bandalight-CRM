import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPanelHeaderComponent } from './crm-panel-header.component';

describe('CrmPanelHeaderComponent', () => {
  let component: CrmPanelHeaderComponent;
  let fixture: ComponentFixture<CrmPanelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPanelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
