import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  selectOptions: { key: string, val: string }[] = [
    { key: 'sector', val: 'All' },
    { key: 'impact', val: 'All' },
    { key: 'swot', val: 'All' }
  ];

  sectors:string[] = [];
  impact:number[] = [];
  swot:string[] = [];
  http!: HttpClient;
  sharedService!:SharedService;
  selectFiltersEnabled!:boolean;
  private sectorUrl: string = "http://localhost:8080/api/data/filters/sector";
  private impactUrl: string = "http://localhost:8080/api/data/filters/impact";
  private swotUrl: string = "http://localhost:8080/api/data/filters/swot";

  constructor(http:HttpClient,sharedService:SharedService) {
    this.http = http;
    this.sharedService = sharedService;
    http.get<any[]>(this.sectorUrl).subscribe(response=> this.sectors=response.map(item=>item));
    http.get<any[]>(this.impactUrl).subscribe(response=> this.impact=response.map(item=>item));
    http.get<any[]>(this.swotUrl).subscribe(response=> this.swot=response.map(item=>item));
  }

  ngOnInit() {
    this.sharedService.selectFiltersEnabled$.subscribe(enabled => {
      this.selectFiltersEnabled = enabled;
    });
  }

  onOptionSelect(event: Event, key: string) {
    const target = event.target as HTMLSelectElement;
    const selectedOption = target.value;

    const optionIndex = this.selectOptions.findIndex(option => option.key === key);
    if (optionIndex !== -1) {
      this.selectOptions[optionIndex].val = selectedOption;
      this.sharedService.setFilterValue(this.selectOptions);
    }
  }

}
