import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmZleceniaDodajComponent } from './crm-zlecenia-dodaj.component';

describe('CrmZleceniaDodajComponent', () => {
  let component: CrmZleceniaDodajComponent;
  let fixture: ComponentFixture<CrmZleceniaDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmZleceniaDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmZleceniaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
