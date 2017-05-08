import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmZleceniaComponent } from './crm-zlecenia.component';

describe('CrmZleceniaComponent', () => {
  let component: CrmZleceniaComponent;
  let fixture: ComponentFixture<CrmZleceniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmZleceniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmZleceniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
