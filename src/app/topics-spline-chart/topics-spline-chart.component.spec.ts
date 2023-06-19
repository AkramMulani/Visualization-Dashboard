import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsSplineChartComponent } from './topics-spline-chart.component';

describe('TopicsSplineChartComponent', () => {
  let component: TopicsSplineChartComponent;
  let fixture: ComponentFixture<TopicsSplineChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsSplineChartComponent]
    });
    fixture = TestBed.createComponent(TopicsSplineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
