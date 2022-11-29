import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainheroComponent } from './mainhero.component';

describe('MainheroComponent', () => {
  let component: MainheroComponent;
  let fixture: ComponentFixture<MainheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
