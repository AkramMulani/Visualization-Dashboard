import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Sector } from '../sector';

@Component({
  selector: 'app-sectors-by-max-life',
  templateUrl: './sectors-by-max-life.component.html',
  styleUrls: ['./sectors-by-max-life.component.css']
})
export class SectorsByMaxLifeComponent {

  sectorName: string[] = [];
  sectorLifeSpan: number[] = [];
  chart!: Chart;

  constructor(http:HttpClient) {
    http.get<Sector[]>("http://localhost:8080/api/lifespans").subscribe(
      (response: Sector[])=>{
        for (const sector of response) {
            this.sectorName.push(sector.name);
            this.sectorLifeSpan.push(sector.lifespan);
        }
        this.chart = new Chart({
          chart:{
            type:'line',
            height: 300
          },
          title:{
            text: 'Sectors By Max Life'
          },
          xAxis: {
            categories: this.sectorName
          },
          yAxis: {
            title: {
              text: 'Life in Years'
            }
          },
          series: [
            {
              name: "Sectors",
              type: 'line',
              data: this.sectorLifeSpan
            }
          ],
          credits:{
            enabled: false
          }
        });
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
