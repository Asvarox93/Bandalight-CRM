import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPracownicyComponent } from './crm-pracownicy.component';

describe('CrmPracownicyComponent', () => {
  let component: CrmPracownicyComponent;
  let fixture: ComponentFixture<CrmPracownicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPracownicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPracownicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
