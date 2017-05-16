import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmKorespondencjaEdytujComponent } from './crm-korespondencja-edytuj.component';

describe('CrmKorespondencjaEdytujComponent', () => {
  let component: CrmKorespondencjaEdytujComponent;
  let fixture: ComponentFixture<CrmKorespondencjaEdytujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmKorespondencjaEdytujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmKorespondencjaEdytujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
