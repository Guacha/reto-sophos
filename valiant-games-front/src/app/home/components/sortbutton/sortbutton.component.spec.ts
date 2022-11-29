import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbuttonComponent } from './sortbutton.component';

describe('SortbuttonComponent', () => {
  let component: SortbuttonComponent;
  let fixture: ComponentFixture<SortbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
