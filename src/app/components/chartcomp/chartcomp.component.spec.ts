import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartcompComponent } from './chartcomp.component';

describe('ChartcompComponent', () => {
  let component: ChartcompComponent;
  let fixture: ComponentFixture<ChartcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
