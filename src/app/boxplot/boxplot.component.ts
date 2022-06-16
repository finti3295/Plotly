import { Component, OnInit } from '@angular/core';
import { Graph } from '../model/graph';
import { GraphService } from '../services/graph.service';

@Component({
  selector: 'app-boxplot',
  templateUrl: './boxplot.component.html',
  styleUrls: ['./boxplot.component.scss']
})
export class BoxplotComponent implements OnInit {

  graph :Graph = new Graph();
  constructor(private graphService: GraphService) { }

  ngOnInit(): void {
    this.getGraph();
  }
  getGraph() {
       
    this.graphService.getBoxplotGraph()
        .subscribe(g => this.graph = g);
    
  }

}
