import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Graph } from '../model/graph';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  getBoxplotGraph(): Observable<Graph> {
    var xData = ['Carmelo<br>Anthony', 'Dwyane<br>Wade',
    'Deron<br>Williams', 'Brook<br>Lopez',
    'Damian<br>Lillard', 'David<br>West',
    'Blake<br>Griffin', 'David<br>Lee',
    'Demar<br>Derozan'];

function getrandom(num: number , mul:number) {
  var value = [ ];
  for ( i = 0; i <= num; i++ ) {
      var rand = Math.random() * mul;
      value.push(rand);
  }
  return value;
}

var yData = [
      getrandom(30 ,10),
      getrandom(30, 20),
      getrandom(30, 25),
      getrandom(30, 40),
      getrandom(30, 45),
      getrandom(30, 30),
      getrandom(30, 20),
      getrandom(30, 15),
      getrandom(30, 43),
  ];
var colors = ['rgba(93, 164, 214, 0.5)', 'rgba(255, 144, 14, 0.5)', 'rgba(44, 160, 101, 0.5)', 'rgba(255, 65, 54, 0.5)', 'rgba(207, 114, 255, 0.5)', 'rgba(127, 96, 0, 0.5)', 'rgba(255, 140, 184, 0.5)', 'rgba(79, 90, 117, 0.5)', 'rgba(222, 223, 0, 0.5)'];

var data = [];

for ( var i = 0; i < xData.length; i ++ ) {
  var result = {
      type: 'box',
      y: yData[i],
      name: xData[i],
      boxpoints: 'all',
      jitter: 0.5,
      whiskerwidth: 0.2,
      fillcolor: 'cls',
      marker: {
          size: 2
      },
      line: {
          width: 1
      }
  };
  data.push(result);
};

var layout = {
  title: 'Points Scored by the Top 9 Scoring NBA Players in 2012',
  yaxis: {
      autorange: true,
      showgrid: true,
      zeroline: true,
      dtick: 5,
      gridcolor: 'rgb(255, 255, 255)',
      gridwidth: 1,
      zerolinecolor: 'rgb(255, 255, 255)',
      zerolinewidth: 2
  },
  margin: {
      l: 40,
      r: 30,
      b: 80,
      t: 100
  },
  paper_bgcolor: 'rgb(243, 243, 243)',
  plot_bgcolor: 'rgb(243, 243, 243)',
  showlegend: false
};
return of ( {
  data: 
    data
  ,
  layout: layout
})
  }
  getPieGraph(): Observable<Graph> {
    var data = [{
      values: [16, 15, 12, 6, 5, 4, 42],
      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
      domain: {column: 0},
      name: 'GHG Emissions',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    },{
      values: [27, 11, 25, 8, 1, 3, 25],
      labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
      text: 'CO2',
      textposition: 'inside',
      domain: {column: 1},
      name: 'CO2 Emissions',
      hoverinfo: 'label+percent+name',
      hole: .4,
      type: 'pie'
    }];
    
    var layout = {
      title: 'Global Emissions 1990-2011',
      annotations: [
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: 'GHG',
          x: 0.17,
          y: 0.5
        },
        {
          font: {
            size: 20
          },
          showarrow: false,
          text: 'CO2',
          x: 0.82,
          y: 0.5
        }
      ],
      height: 400,
      width: 600,
      showlegend: true,
      grid: {rows: 1, columns: 2}
    };
    
    
    
   return of ( {
    data: 
      data
    ,
    layout: layout
})

  }

  getScatterGraph():Observable<Graph> {
    var trace1 = {
      x: [1, 2, 3, 4, 5],
      y: [1, 6, 3, 6, 1],
      mode: 'markers+text',
      type: 'scatter',
      name: 'markers+text',
      text: ['A-1', 'A-2', 'A-3', 'A-4', 'A-5'],
      textposition: 'top center',
      textfont: {
        family:  'Raleway, sans-serif'
      },
      line: {shape: 'markers+text'    },
      marker: { size: 12 }
    };

    var trace2 = {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: 'lines',
      name: 'lines',
      line: {shape: 'lines',
        color: 'rgb(219, 64, 82)',
        width: 4
      }
    };
    
    var trace3 = {
      x: [1, 2, 3, 4],
      y: [12, 9, 15, 12],
      text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],

      mode: 'lines+markers',
      name:'lines+markers',
      line: {shape: 'lines+markers'    }
    };
    var trace4 = {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      mode: 'markers',
      name:'markers',
 
      marker: {
        color: 'rgb(164, 194, 244)',
        size: 12,
        line: {shape: 'markers',
          color: 'white',
          width: 0.5
        }
      },
      type: 'scatter'
    };

    var trace5 = {
      x: [1, 2, 3, 4, 5],
      y: [6, 8, 7, 8, 6],
      mode: 'lines',
      name: 'dashdot',
      line: {
        dash: 'dashdot',
        width: 4
      }
    };
    var trace6 = {
      x: [1, 2, 3, 4, 5],
      y: [16, 18, 17, 18, 16],
      mode: 'lines',
      name: 'dot',
      line: {
        dash: 'dot',
        width: 4
      }
    };
    var trace7= {
      x: [1, 2, 3, 4, 5, 6, 7, 8],
      y: [16, null, 13, 10, 8],
      mode: 'lines',
      connectgaps: true,
      name:'fill gapes'
    };
    var trace8 = {
      x: [1, 2, 3, 4],
      y: [10, 11, 12, 13],
      text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
      mode: 'markers',
      name:'Bubble',
      marker: {

        size: [40, 60, 80, 100]
      }
    };
    var data = [ trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8 ];
    var layout = {
      xaxis: {
       // range: [ 0.75, 5.25 ],
        title: 'X axis title',
    
    zeroline: false
      },
      yaxis: {
       // range: [0, 8],
        showline: true,
        title: 'Y axis title',
      },
      legend: {
        y: 0.5,
        yref: 'paper',
        font: {
          family: 'Arial, sans-serif',
          size: 20,
          color: 'grey',
          traceorder: 'reversed'
        }
        
      
      },
      title:'Data Labels on the Plot'
    };
    return of( {
      data: 
        data
      ,
      layout: layout
  });
  }


  getBarGraph():Observable<Graph>{
    var yValue = [600,700,900];
    var trace1 = {
      x: ['2016','2017','2018'],
      y: yValue,
      base: 0,
      name: 'revenue',
      text: yValue.map(String),
      textposition: 'auto',
      hoverinfo: 'none',
      opacity: 0.5,
      marker: {
        color: 'rgba(58,200,225,.5)',
        line: {
          color: 'rgb(8,48,107)',
          width: 1.5
        }
      },
      error_y: {
        type: 'data',
        array: [100, 50, 150],
        visible: true,
        color: '#85144B',
    thickness: 1.5,
    width: 3,
    opacity: 1
      },
      type: 'bar'
    };
    
    var trace2 = {
      type: 'bar',
    x: ['2016','2017','2018'],
    y: [500,600,700],
    base: [-500,-600,-700],
    hovertemplate: '%{base}',
    marker: {
      color: 'red'
    },
    name: 'expenses'
    };

 
    
    var data = [trace1, trace2];
    var layout = {
      title: 'Bar graph example',
      font:{
        family: 'Raleway, sans-serif'
      },
      legend: {
   
        bgcolor: 'rgba(255, 255, 255, 0)',
        bordercolor: 'rgba(255, 255, 255, 0)'
      },
      showlegend: true,
      xaxis: {
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        },
        tickangle: -45
      },
      yaxis: {
        title: 'USD (millions)',
        titlefont: {
          size: 16,
          color: 'rgb(107, 107, 107)'
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      barmode: 'group',
      bargap: 0.15,
  bargroupgap: 0.1
    };
    return of( {
      data: 
        data
      ,
      layout: layout
  });
  }
  constructor( ) {
   

   }
}
