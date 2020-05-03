import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportChildComponent } from './weather-report-child.component';

describe('WeatherReportChildComponent', () => {
  let component: WeatherReportChildComponent;
  let fixture: ComponentFixture<WeatherReportChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherReportChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
