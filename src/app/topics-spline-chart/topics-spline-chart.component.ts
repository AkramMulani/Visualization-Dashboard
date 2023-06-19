import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-topics-spline-chart',
  templateUrl: './topics-spline-chart.component.html',
  styleUrls: ['./topics-spline-chart.component.css']
})
export class TopicsSplineChartComponent {
  chart!: Chart;
  topics: string[] = [];
  sectors: string[] = [];
  intensities: number[] = [];
  high_topic: string[] = [];
  medium_topic: string[] = [];
  low_topic: string[] = [];
  high: number[] = [];
  medium: number[] = [];
  low: number[] = [];

  constructor(http:HttpClient) {
    http.get<string[]>("http://localhost:8080/api/data/topics").subscribe(
      response=> {
        this.topics = response.map(item=> item[1]);
        this.sectors = response.map(item=> item[0]);
        this.intensities = response.map(item=> +item[3]);

        response.forEach(item=>{
          if (+item[3]>=80) {
            this.high_topic.push(item[1]);
            this.high.push(+item[3]);
          }
          else if(+item>=50) {
            this.medium_topic.push(item[1]);
            this.medium.push(+item[3]);
          }
          else {
            this.low_topic.push(item[1]);
            this.low.push(+item[3]);
          }
        });

        this.chart = new Chart({
          chart: {
            type: "spline",
            height: 350
          },
          title: { text: "Topics With Intensities" },
          xAxis: { categories: [...this.high_topic,...this.medium_topic,...this.low_topic] },
          yAxis: { title: { text: "Intensity" } },
          series: [
            {
              name: "High",
              type: "spline",
              data: this.high.map((item,index)=> ({
                name: this.high_topic[index],
                y: item
              }))
            },
            {
              name: "Medium",
              type: "spline",
              data: this.medium.map((item,index)=> ({
                name: this.medium_topic[index],
                y: item
              }))
            },
            {
              name: "Low",
              type: "spline",
              data: this.low.map((item,index)=> ({
                name: this.low_topic[index],
                y: item
              }))
            }
          ],
          credits: { enabled: false }
        });
        console.log(response);
      },
      error=> console.info(error)
    );
  }
}
