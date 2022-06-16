import { Serializer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Graph, Serie, Layout } from '../model/graph';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.scss']
})
export class ScatterChartComponent implements OnInit {
  graph :Graph = new Graph();
  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    //console.log("ngOnInit");
    this.getGraph();
 
  }
  getGraph() {

    this.graphService.getScatterGraph()
        .subscribe(g => this.graph = g);
    
  }

}
