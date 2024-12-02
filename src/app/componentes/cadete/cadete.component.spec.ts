import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CadeteComponent } from './cadete.component';

describe('CadeteComponent', () => {
  let component: CadeteComponent;
  let fixture: ComponentFixture<CadeteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
