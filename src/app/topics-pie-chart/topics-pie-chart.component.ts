import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-topics-pie-chart',
  templateUrl: './topics-pie-chart.component.html',
  styleUrls: ['./topics-pie-chart.component.css']
})
export class TopicsPieChartComponent {
  chart!: Chart;
  topics: string[] = [];
  count: number[] = [];
  sectors: string[] = [];

  constructor(http:HttpClient) {
    http.get<string[][]>("http://localhost:8080/api/data/topics/sectorcount").subscribe(
      response=> {
        this.topics = response.map(item=> item[0]);
        this.sectors = response.map(item=> item[1]);
        this.count = response.map(item=> +item[2]);
        this.chart = new Chart({
          chart: {
            type: "pie",
            height: 350
          },
          title: { text: "Topics With Common Sectors" },
          series: [{
            name: 'Topics',
            type: 'pie',
            data: this.sectors.map((item,index)=>({
              name: item,
              y: this.count[index]
            }))
          }],
          credits: { enabled: false }
        });
        console.log(response);
      },
      error=> {
        console.log(error);
      }
    );
  }
}
