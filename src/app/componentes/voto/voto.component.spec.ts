import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VotoComponent } from './voto.component';

describe('VotoComponent', () => {
  let component: VotoComponent;
  let fixture: ComponentFixture<VotoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
