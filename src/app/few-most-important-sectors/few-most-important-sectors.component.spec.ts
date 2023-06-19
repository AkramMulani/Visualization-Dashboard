import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FewMostImportantSectorsComponent } from './few-most-important-sectors.component';

describe('FewMostImportantSectorsComponent', () => {
  let component: FewMostImportantSectorsComponent;
  let fixture: ComponentFixture<FewMostImportantSectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FewMostImportantSectorsComponent]
    });
    fixture = TestBed.createComponent(FewMostImportantSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
