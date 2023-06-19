import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pestle-wise-percentages',
  templateUrl: './pestle-wise-percentages.component.html',
  styleUrls: ['./pestle-wise-percentages.component.css']
})
export class PestleWisePercentagesComponent {
  chart!: Chart;
  response: string[][] = [];
  pestles!: string[];
  colors: string[] = ['#123456','#0dad3a','#780e05','#1a066c','#15cfc9','#d460e9','#e7df0e','#0b65b9'];

  constructor(http:HttpClient) {
    http.get<any[]>("http://localhost:8080/api/data/pestles").subscribe(
      (response)=>{
        this.pestles = response.map(item=> item[0]);
        this.response = response.map(item=> [item[0],item[1]]);
        this.chart = new Chart({
          chart:{
            type:'bar',
            height: 200
          },
          title: {
            text: 'Pestles Chart'
          },
          xAxis: {
            categories: this.pestles
          },
          yAxis: {
            title: {
              text:''
            }
          },
          series: [
            {
              type: 'bar',
              showInLegend: false,
              data: this.response.map((value,index)=>({
                name: value[0],
                y: +value[1],
                color: this.colors[index]
              }))
            }
          ],
          credits: {
            enabled: false
          }
        });
        console.log(response);
      },
      (error)=>{console.log(error); }
    );
  }
}
