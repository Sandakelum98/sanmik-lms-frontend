import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookListComponent } from './all-book-list.component';

describe('AllBookListComponent', () => {
  let component: AllBookListComponent;
  let fixture: ComponentFixture<AllBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBookListComponent]
    });
    fixture = TestBed.createComponent(AllBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
