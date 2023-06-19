import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PestleWisePercentagesComponent } from './pestle-wise-percentages.component';

describe('PestleWisePercentagesComponent', () => {
  let component: PestleWisePercentagesComponent;
  let fixture: ComponentFixture<PestleWisePercentagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PestleWisePercentagesComponent]
    });
    fixture = TestBed.createComponent(PestleWisePercentagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
