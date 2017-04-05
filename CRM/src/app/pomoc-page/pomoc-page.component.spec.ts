import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomocPageComponent } from './pomoc-page.component';

describe('PomocPageComponent', () => {
  let component: PomocPageComponent;
  let fixture: ComponentFixture<PomocPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomocPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
