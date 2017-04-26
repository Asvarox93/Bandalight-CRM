import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmKlienciEdytujComponent } from './crm-klienci-edytuj.component';

describe('CrmKlienciEdytujComponent', () => {
  let component: CrmKlienciEdytujComponent;
  let fixture: ComponentFixture<CrmKlienciEdytujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmKlienciEdytujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmKlienciEdytujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
