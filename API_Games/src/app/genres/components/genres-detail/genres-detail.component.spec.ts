import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresDetailComponent } from './genres-detail.component';

describe('GenresDetailComponent', () => {
  let component: GenresDetailComponent;
  let fixture: ComponentFixture<GenresDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
