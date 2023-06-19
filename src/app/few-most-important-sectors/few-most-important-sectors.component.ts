import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Sector } from '../sector';

@Component({
  selector: 'app-few-most-important-sectors',
  templateUrl: './few-most-important-sectors.component.html',
  styleUrls: ['./few-most-important-sectors.component.css']
})
export class FewMostImportantSectorsComponent {
  sectorName: string[] = [];
  sectorSwot: string[] = [];
  sectorPestle: string[] = [];
  sectorStart: number[] = [];
  sectorEnd: number[] = [];
  sectorImpact: number[] = [];
  response!: string[];

  constructor(http:HttpClient) {
    http.get<string[]>("http://localhost:8080/api/data/imp").subscribe(
      (response: string[])=>{
        this.response = response;
        for (const r of response) {
          this.sectorName.push(r[0]);
          this.sectorSwot.push(r[1]);
          this.sectorPestle.push(r[2]);
          this.sectorStart.push(parseInt(r[3]));
          this.sectorEnd.push(parseInt(r[4]));
          this.sectorImpact.push(parseInt(r[5]));

        }
        console.log(response);
      },
      (error)=>{ console.log(error) }
    )
  }
}
