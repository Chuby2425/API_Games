import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyPageComponent } from './strategy-page.component';

describe('StrategyPageComponent', () => {
  let component: StrategyPageComponent;
  let fixture: ComponentFixture<StrategyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
