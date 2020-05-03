import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastParentComponent } from './weather-forecast-parent.component';

describe('WeatherForecastParentComponent', () => {
  let component: WeatherForecastParentComponent;
  let fixture: ComponentFixture<WeatherForecastParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
