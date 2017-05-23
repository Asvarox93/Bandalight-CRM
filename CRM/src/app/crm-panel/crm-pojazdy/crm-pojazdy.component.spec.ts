import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPojazdyComponent } from './crm-pojazdy.component';

describe('CrmPojazdyComponent', () => {
  let component: CrmPojazdyComponent;
  let fixture: ComponentFixture<CrmPojazdyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPojazdyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPojazdyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
