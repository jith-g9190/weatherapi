import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './weather-model/weather-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
  cityName: string = 'wellington';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName=''


  }
  onSubmit() {
this.getWeatherData(this.cityName);
this.cityName=''
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData('wellington')
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          console.log(response);

        }
      })
  }
}

