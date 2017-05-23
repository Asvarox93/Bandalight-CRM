import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPojazdyEdytujComponent } from './crm-pojazdy-edytuj.component';

describe('CrmPojazdyEdytujComponent', () => {
  let component: CrmPojazdyEdytujComponent;
  let fixture: ComponentFixture<CrmPojazdyEdytujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPojazdyEdytujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPojazdyEdytujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
