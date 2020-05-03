import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReportParentComponent } from './weather-report-parent.component';

describe('WeatherReportParentComponent', () => {
  let component: WeatherReportParentComponent;
  let fixture: ComponentFixture<WeatherReportParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherReportParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReportParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
