import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPracownicyEdytujComponent } from './crm-pracownicy-edytuj.component';

describe('CrmPracownicyEdytujComponent', () => {
  let component: CrmPracownicyEdytujComponent;
  let fixture: ComponentFixture<CrmPracownicyEdytujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPracownicyEdytujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPracownicyEdytujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
