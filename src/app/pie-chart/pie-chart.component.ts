import { Component, OnInit } from '@angular/core';
import { Graph } from '../model/graph';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  graph :Graph = new Graph();
  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    this.getGraph();
  }
  getGraph() {
       
    this.graphService.getPieGraph()
        .subscribe(g => this.graph = g);
    
  }

}
