import { Injectable } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { IWeather } from '../Models/weather.model';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  weatherApiURl = 'http://api.weatherapi.com/v1/current.json';

  weatherItems: IWeather[] = [];
  weatheList$ = new Subject<IWeather[]>();

  params = {
    key: '8b5eadc03795495c88e105918233009',
  };

  constructor(private http: HttpClient) {}

  getDataNew(cityName: string) {
    const params = new HttpParams()
      .set('key', this.params['key'])
      .set('q', cityName)
      .set('aqi', 'no');

    return this.http.get<IWeather>(this.weatherApiURl, { params }).pipe(
      catchError((error) => {
        const customError = {
          status: error.status,
          message: error.error.error.message,
        };
        return throwError(customError);
      })
    );
  }

  addToList(data: any) {
    this.weatherItems.push(data);
    this.weatheList$.next(this.weatherItems);
  }

  deleteCity(data: IWeather) {
    const index = this.weatherItems.findIndex(
      (city: IWeather) => city.location.name === data.location.name
    );

    if (index != -1) {
      this.weatherItems.splice(index, 1);

      console.log(this.weatherItems);

      this.weatheList$.next(this.weatherItems);
    }
  }
}
