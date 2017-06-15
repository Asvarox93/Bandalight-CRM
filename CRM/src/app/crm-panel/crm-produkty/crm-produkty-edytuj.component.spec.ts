import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmProduktyEdytujComponent } from './crm-produkty-edytuj.component';

describe('CrmProduktyEdytujComponent', () => {
  let component: CrmProduktyEdytujComponent;
  let fixture: ComponentFixture<CrmProduktyEdytujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmProduktyEdytujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmProduktyEdytujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
