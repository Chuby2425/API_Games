import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsDetailComponent } from './platforms-detail.component';

describe('PlatformsDetailComponent', () => {
  let component: PlatformsDetailComponent;
  let fixture: ComponentFixture<PlatformsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
