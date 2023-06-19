import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsByImpactComponent } from './sectors-by-impact.component';

describe('SectorsByImpactComponent', () => {
  let component: SectorsByImpactComponent;
  let fixture: ComponentFixture<SectorsByImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectorsByImpactComponent]
    });
    fixture = TestBed.createComponent(SectorsByImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
