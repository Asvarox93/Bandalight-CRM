import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmZleceniaEdytujComponent } from './crm-zlecenia-edytuj.component';

describe('CrmZleceniaEdytujComponent', () => {
  let component: CrmZleceniaEdytujComponent;
  let fixture: ComponentFixture<CrmZleceniaEdytujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmZleceniaEdytujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmZleceniaEdytujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
