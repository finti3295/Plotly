import { Component, OnInit } from '@angular/core';
import { Graph } from '../model/graph';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  graph :Graph = new Graph();
  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    this.getGraph();
  }
  getGraph() {

    this.graphService.getBarGraph()
        .subscribe(g => this.graph = g);
    
  }

}
