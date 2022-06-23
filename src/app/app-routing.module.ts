import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BoxplotComponent } from './boxplot/boxplot.component';
import { HistogramchartComponent } from './histogramchart/histogramchart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PlotlyExampleComponent } from './plotly-example/plotly-example.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

const routes: Routes = [
  { path: 'histogramchart', component: HistogramchartComponent},
  { path: 'boxplotchart', component: BoxplotComponent},
  { path: 'barchart', component: BarChartComponent},
  { path: 'piechart', component: PieChartComponent},
  { path: 'scatterchart', component: ScatterChartComponent},
  { path: '', component: PlotlyExampleComponent,  pathMatch: 'full' },  
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
