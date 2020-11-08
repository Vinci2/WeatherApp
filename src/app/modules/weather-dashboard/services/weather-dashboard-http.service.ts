import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityDescriptor } from '../models/weather-dashboard-models';

@Injectable({ providedIn: 'root' })
export class WeatherDashboardHttpService {

    private londonID = 2643743;
    private parisID = 2988507;
    private berlinID = 2950158;
    private romeID = 3169071;
    private madridID = 6359304;

    private citiesIDs = `${this.londonID},${this.parisID},${this.berlinID},${this.romeID},${this.madridID}`;

    private OPEN_WEATHER_API_KEY = '50880d00449e24410eaee5b21d0e05f0';

    constructor(private httpClient: HttpClient) { }

    public fetchWeatherData(): Observable<any> {
        return this.httpClient.get(
            `http://api.openweathermap.org/data/2.5/group?id=${this.citiesIDs}&units=metric&appid=${this.OPEN_WEATHER_API_KEY}`
        );
    }

    public fetchCityForecast(city: CityDescriptor): Observable<any> {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&units=metric&exclude=minutely,daily&appid=${this.OPEN_WEATHER_API_KEY}`;
        return this.httpClient.get(url);
    }
}

