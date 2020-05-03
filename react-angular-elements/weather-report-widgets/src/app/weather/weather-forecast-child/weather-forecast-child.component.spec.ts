import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastChildComponent } from './weather-forecast-child.component';

describe('WeatherForecastChildComponent', () => {
  let component: WeatherForecastChildComponent;
  let fixture: ComponentFixture<WeatherForecastChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherForecastChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
