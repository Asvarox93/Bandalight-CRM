import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPracownicyDodajComponent } from './crm-pracownicy-dodaj.component';

describe('CrmPracownicyDodajComponent', () => {
  let component: CrmPracownicyDodajComponent;
  let fixture: ComponentFixture<CrmPracownicyDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPracownicyDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPracownicyDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
