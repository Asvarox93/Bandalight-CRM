import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPojazdyDodajComponent } from './crm-pojazdy-dodaj.component';

describe('CrmPojazdyDodajComponent', () => {
  let component: CrmPojazdyDodajComponent;
  let fixture: ComponentFixture<CrmPojazdyDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPojazdyDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPojazdyDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
