import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsScrollerComponent } from './comics-scroller.component';

describe('ComicsScrollerComponent', () => {
  let component: ComicsScrollerComponent;
  let fixture: ComponentFixture<ComicsScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsScrollerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
