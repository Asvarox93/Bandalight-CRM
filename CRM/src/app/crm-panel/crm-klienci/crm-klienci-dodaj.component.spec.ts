import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmKlienciDodajComponent } from './crm-klienci-dodaj.component';

describe('CrmKlienciDodajComponent', () => {
  let component: CrmKlienciDodajComponent;
  let fixture: ComponentFixture<CrmKlienciDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmKlienciDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmKlienciDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
