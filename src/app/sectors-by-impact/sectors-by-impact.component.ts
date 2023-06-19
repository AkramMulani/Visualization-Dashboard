import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sectors-by-impact',
  templateUrl: './sectors-by-impact.component.html',
  styleUrls: ['./sectors-by-impact.component.css']
})
export class SectorsByImpactComponent {
  sectorName: string[][] = [];
  sectorImpact!: number[];
  regions!: string[];
  chart!: Chart;

  constructor(http:HttpClient) {
    http.get<any[]>("http://localhost:8080/api/sectors/impact").subscribe(
      (response)=> {
        
        this.regions = response.map(item=> item[0]);
        this.sectorImpact = response.map(item=> item[1]);
        this.sectorName = response.map(item=> [item[0],item[1]]);
        for (const r of this.regions) {
          console.log(r);
        }
        for (const i of this.sectorImpact) {
          console.log(i);
        }
        this.chart = new Chart({
          chart: {
            type: 'pie',
            height: 300
          },
          title: {
            text: 'Sector Impact on Regions'
          },
          yAxis: {
            title: {
              text: 'Sector\'s Impact on Regions'
            }
          },
          series: [
            {
              type: 'pie',
              data: this.sectorName.map((value,index)=>({
                  name: value[0],
                  y: +value[1]
                }))
              
            }
          ],
          credits: {
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

  getChartData() {
    return this.regions.map((region, index) => ({
      name: region,
      y: this.sectorImpact[index]
    }));
  }
}
