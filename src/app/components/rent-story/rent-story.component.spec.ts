import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentStoryComponent } from './rent-story.component';

describe('RentStoryComponent', () => {
  let component: RentStoryComponent;
  let fixture: ComponentFixture<RentStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
