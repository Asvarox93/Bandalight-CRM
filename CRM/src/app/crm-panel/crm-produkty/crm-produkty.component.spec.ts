import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmProduktyComponent } from './crm-produkty.component';

describe('CrmProduktyComponent', () => {
  let component: CrmProduktyComponent;
  let fixture: ComponentFixture<CrmProduktyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmProduktyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmProduktyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
