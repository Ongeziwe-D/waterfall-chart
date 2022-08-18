import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WaterfallChartComponent } from './waterfall-chart/waterfall-chart.component';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
const CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    WaterfallChartComponent,
    CanvasJSChart

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
