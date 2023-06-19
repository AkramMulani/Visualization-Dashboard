import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-topics-by-duration',
  templateUrl: './topics-by-duration.component.html',
  styleUrls: ['./topics-by-duration.component.css']
})
export class TopicsByDurationComponent {
  topics: string[] = [];
  durations: number[] = [];
  chart!: Chart;
  max_topic: string[] = [];
  min_topic: string[] = [];
  max: number[] = [];
  min: number[] = [];
  
  constructor(http:HttpClient) {
    http.get<string[][]>("http://localhost:8080/api/data/topics").subscribe(
      response=>{
        this.topics = response.map(item=> item[1]);
        this.durations = response.map(item=> +item[2]);
        response.forEach((arr)=>{
          if (+arr[2]>=25) {
            // duration is in max
            this.max_topic.push(arr[1]);
            this.max.push(+arr[2]);
          }
          else {
            // duration is in min
            this.min_topic.push(arr[1]);
            this.min.push(+arr[2]);
          }
        });
        
        let seriesData = [];
        for (let i=0;i<this.max_topic.length;i++) {
          seriesData.push({
            name: this.max_topic[i],
            y: this.max[i],
            color:'#FF0000',
            marker: { symbol: 'circle' }
          });
        }
        for (let i=0;i<this.min_topic.length;i++) {
          seriesData.push({
            name: this.min_topic[i],
            y: this.min[i],
            color: '#00FF00',
            marker: { symbol: 'square' }
          })
        }
        
        this.chart = new Chart({
          chart: {
            type: "line",
            height: 350
          },
          title: {
            text: "Topics by Durations"
          },
          xAxis: {
            categories: [...this.max_topic,...this.min_topic]
          },
          yAxis: {
            title: { text: "Duration (in years)" }
          },
          series: [{name: 'Max', type: 'spline', data: this.max.map(item=> item)},
                  { name: 'Min', type: 'spline', data: this.min.map(item=>item)}],
          credits: { enabled: false }
        });
        console.log(response);
      },
      error=> console.log(error)
    );
  }
}
