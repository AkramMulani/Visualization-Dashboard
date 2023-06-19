import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesTabComponent } from './titles-tab.component';

describe('TitlesTabComponent', () => {
  let component: TitlesTabComponent;
  let fixture: ComponentFixture<TitlesTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlesTabComponent]
    });
    fixture = TestBed.createComponent(TitlesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
