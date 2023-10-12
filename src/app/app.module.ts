import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherItemComponent } from './weather/weather-list/weather-item/weather-item.component';
import { FormsModule } from '@angular/forms';
import { FahrenToCelsiusPipe } from './Helper/fahren-to-celsius.pipe';
import { DetailItemComponent } from './component/detail-item/detail-item.component';
import { LoadingComponent } from './component/loading/loading.component';
import { ErrorHandleComponent } from './component/error-handle/error-handle.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherItemComponent,
    FahrenToCelsiusPipe,
    DetailItemComponent,
    LoadingComponent,
    ErrorHandleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
