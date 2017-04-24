import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmKlienciComponent } from './crm-klienci.component';

describe('CrmKlienciComponent', () => {
  let component: CrmKlienciComponent;
  let fixture: ComponentFixture<CrmKlienciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmKlienciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmKlienciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
