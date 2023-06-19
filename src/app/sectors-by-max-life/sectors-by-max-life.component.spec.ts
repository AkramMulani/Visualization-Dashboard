import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorsByMaxLifeComponent } from './sectors-by-max-life.component';

describe('SectorsByMaxLifeComponent', () => {
  let component: SectorsByMaxLifeComponent;
  let fixture: ComponentFixture<SectorsByMaxLifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectorsByMaxLifeComponent]
    });
    fixture = TestBed.createComponent(SectorsByMaxLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
