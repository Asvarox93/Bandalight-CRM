import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmKorespondecjaComponent } from './crm-korespondecja.component';

describe('CrmKorespondecjaComponent', () => {
  let component: CrmKorespondecjaComponent;
  let fixture: ComponentFixture<CrmKorespondecjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmKorespondecjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmKorespondecjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
