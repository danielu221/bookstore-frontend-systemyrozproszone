import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInOtherBookstoresComponent } from './search-in-other-bookstores.component';

describe('SearchInOtherBookstoresComponent', () => {
  let component: SearchInOtherBookstoresComponent;
  let fixture: ComponentFixture<SearchInOtherBookstoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInOtherBookstoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInOtherBookstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
