import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsByDurationComponent } from './topics-by-duration.component';

describe('TopicsByDurationComponent', () => {
  let component: TopicsByDurationComponent;
  let fixture: ComponentFixture<TopicsByDurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicsByDurationComponent]
    });
    fixture = TestBed.createComponent(TopicsByDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
