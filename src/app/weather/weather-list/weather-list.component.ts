import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service';
import { ErrorHandleComponent } from '../../component/error-handle/error-handle.component';
import { IWeather } from '../../Models/weather.model';


@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit {
  searchValue: string = '';
  isloading: boolean = false;
  cities: IWeather[] = [];

  @ViewChild('error_container', { read: ViewContainerRef })
  errorContainer: ViewContainerRef;

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.weatherService.weatheList$.subscribe((items) => {
      this.isloading = false;
      this.cities = items;
    });
  }

  add() {
    if (this.searchValue) {
      this.isloading = true;
      // this.weatherService.getDataByCity(this.searchValue);
      this.weatherService.getDataNew(this.searchValue).subscribe(
        (resp) => {
          this.weatherService.addToList(resp);
        },
        (error) => {
          this.isloading = false;
          console.log('error block');
          const errorComponentResolver =
            this.errorContainer.createComponent(ErrorHandleComponent);
          errorComponentResolver.instance.error = error;

          errorComponentResolver.instance.close_error.subscribe(() => {
            this.errorContainer.clear();
          });
        }
      );
    }
    this.searchValue = '';
  }

  delete(obj: IWeather) {
    console.log('delete');
    console.log(obj);

    this.weatherService.deleteCity(obj);
  }
}
