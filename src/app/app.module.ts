import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { PlotlyExampleComponent } from './plotly-example/plotly-example.component';
import { NavMemuComponent } from './nav-memu/nav-memu.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { HistogramchartComponent } from './histogramchart/histogramchart.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { SidebarComponent } from './sidebar/sidebar.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    PlotlyExampleComponent,
    NavMemuComponent,
    ScatterChartComponent,
    BarChartComponent,
    PieChartComponent,
    BoxplotComponent,
    HistogramchartComponent,
    ThemeSwitcherComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
