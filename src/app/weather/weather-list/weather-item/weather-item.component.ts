import {
  Component,
  ViewChild,
  ViewContainerRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { IWeather } from '../../../Models/weather.model';
import { FahrenToCelsiusPipe } from '../../../Helper/fahren-to-celsius.pipe';
import { DetailItemComponent } from '../../../component/detail-item/detail-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss'],
})
export class WeatherItemComponent implements OnInit, OnDestroy {
  @Input('cityData') weatherItem: IWeather;

  @Output() deleteItem = new EventEmitter<IWeather>();

  @ViewChild('detailComp', { read: ViewContainerRef })
  detailCompContainer: ViewContainerRef;

  private closeSub: Subscription;
  getBackgroundColor: { background: string };

  ngOnInit(): void {
    this.getBackgroundColor = {
      background:
        this.weatherItem.current.temp_c > 15
          ? 'linear-gradient(130deg, rgba(248,246,9,0.9521887856705182) 29%, rgba(238,233,154,0.5292195979954482) 59%)'
          : ' linear-gradient(130deg, rgba(9,185,248,0.9521887856705182) 29%, rgba(134,225,231,0.5292195979954482) 60%)',
    };
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      console.log('Destroying');

      this.closeSub.unsubscribe();
    }
  }

  close() {
    this.deleteItem.emit(this.weatherItem);
  }

  detail_comp_open() {
    const detailInstance =
      this.detailCompContainer.createComponent(DetailItemComponent);
    detailInstance.instance.cityData = this.weatherItem;
    this.closeSub = detailInstance.instance.closeComp.subscribe(() => {
      this.closeSub.unsubscribe();
      this.detailCompContainer.clear();
    });
  }
}
