import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmProduktyDodajComponent } from './crm-produkty-dodaj.component';

describe('CrmProduktyDodajComponent', () => {
  let component: CrmProduktyDodajComponent;
  let fixture: ComponentFixture<CrmProduktyDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmProduktyDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmProduktyDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
