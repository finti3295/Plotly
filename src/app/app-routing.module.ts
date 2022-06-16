import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotlyExampleComponent } from './plotly-example/plotly-example.component';

const routes: Routes = [
  { path: '', component: PlotlyExampleComponent,  pathMatch: 'full' },  
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
