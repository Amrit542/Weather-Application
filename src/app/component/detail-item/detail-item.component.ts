import { Component,Input,  Output, EventEmitter, OnInit } from '@angular/core';
import { IWeather } from "../../Models/weather.model";

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss']
})
export class DetailItemComponent implements OnInit {

  @Input() cityData: IWeather;
  @Output() closeComp = new EventEmitter<void>();
  getBackgroundColor: any;

  ngOnInit(): void {
    this.getBackgroundColor= {
      "background": this.cityData.current.temp_c > 15 ? 
      "linear-gradient(130deg, rgba(248,246,9,0.9521887856705182) 29%, rgba(238,233,154,0.5292195979954482) 59%)":
      " linear-gradient(130deg, rgba(9,185,248,0.9521887856705182) 29%, rgba(134,225,231,0.5292195979954482) 60%)"
    }
  }

  

  onClose(){
    this.closeComp.emit()

  }


  
}
