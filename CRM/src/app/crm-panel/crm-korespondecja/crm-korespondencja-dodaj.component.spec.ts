import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmKorespondencjaDodajComponent } from './crm-korespondencja-dodaj.component';

describe('CrmKorespondencjaDodajComponent', () => {
  let component: CrmKorespondencjaDodajComponent;
  let fixture: ComponentFixture<CrmKorespondencjaDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmKorespondencjaDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmKorespondencjaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
