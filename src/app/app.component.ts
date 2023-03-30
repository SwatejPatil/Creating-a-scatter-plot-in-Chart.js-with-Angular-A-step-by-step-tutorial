import { Component } from '@angular/core';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data = [{'x': 17, 'y': 94}, {'x': 28, 'y': 82}, {'x': 33, 'y': 70}, {'x': 11, 'y': 40}, {'x': 49, 'y': 49},
  {'x': 98, 'y': 96}, {'x': 62, 'y': 21}, {'x': 69, 'y': 32}, {'x': 45, 'y': 4}, {'x': 45, 'y': 12},
   {'x': 46, 'y': 87}, {'x': 52, 'y': 58}, {'x': 48, 'y': 83}, {'x': 19, 'y': 55}, {'x': 72, 'y': 100},
    {'x': 100, 'y': 50}, {'x': 41, 'y': 78}, {'x': 8, 'y': 64}, {'x': 33, 'y': 46}, {'x': 51, 'y': 90},
     {'x': 48, 'y': 1}, {'x': 69, 'y': 42}, {'x': 72, 'y': 77}, {'x': 95, 'y': 95}, {'x': 55, 'y': 59},
      {'x': 64, 'y': 70}, {'x': 18, 'y': 27}, {'x': 49, 'y': 45}, {'x': 5, 'y': 71}, {'x': 98, 'y': 14},
       {'x': 14, 'y': 64}, {'x': 1, 'y': 6}, {'x': 57, 'y': 40}, {'x': 40, 'y': 17}, {'x': 19, 'y': 54},
        {'x': 73, 'y': 52}, {'x': 26, 'y': 71}, {'x': 93, 'y': 87}, {'x': 58, 'y': 49}, {'x': 2, 'y': 63},
         {'x': 89, 'y': 93}, {'x': 78, 'y': 48}, {'x': 49, 'y': 10}, {'x': 51, 'y': 36}, {'x': 90, 'y': 3},
          {'x': 90, 'y': 77}, {'x': 100, 'y': 33}, {'x': 45, 'y': 24}, {'x': 82, 'y': 95}, {'x': 46, 'y': 28}];
  ngOnInit() {
    this.createScatterPlot();
}

  title = 'my-project';
  createScatterPlot() {
    const scatterPlot = new Chart('myChart', {
       type: 'scatter',
       data: {
          datasets: [{
             label: 'My Dataset',
             data: this.data
          }]
       },
       options: {
         aspectRatio:3,
         datasets: {
            scatter: {
               pointRadius: 5,
               pointStyle: 'rect'
            }
         }
      }
      
      
      
     
    });
 }


}
