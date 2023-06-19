import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsTabComponent } from './contact-us-tab.component';

describe('ContactUsTabComponent', () => {
  let component: ContactUsTabComponent;
  let fixture: ComponentFixture<ContactUsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsTabComponent]
    });
    fixture = TestBed.createComponent(ContactUsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
