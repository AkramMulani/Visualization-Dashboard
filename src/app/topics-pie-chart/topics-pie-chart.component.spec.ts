import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsPieChartComponent } from './topics-pie-chart.component';

describe('TopicsPieChartComponent', () => {
  let component: TopicsPieChartComponent;
  let fixture: ComponentFixture<TopicsPieChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsPieChartComponent]
    });
    fixture = TestBed.createComponent(TopicsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
