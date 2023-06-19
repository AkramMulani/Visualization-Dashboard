import { Component } from '@angular/core';
import { Locations } from '../locations';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations-tab',
  templateUrl: './locations-tab.component.html',
  styleUrls: ['./locations-tab.component.css']
})
export class LocationsTabComponent {
  l_container!: Locations[];
  lat: number[] = [];
  lng: number[] = [];
  sector: string[] = [];
  swot: string[] = [];
  city: string[] = [];
  country: string[] = [];
  insight: string[] = [];
  router!: Router;

  constructor(http:HttpClient, router:Router) {
    this.router = router;
    http.get<Locations[]>("http://localhost:8080/api/data/locations").subscribe(
      response=>{
        this.l_container = response;
        for (const location of response) {
          this.lat.push(location.cityLat);
          this.lng.push(location.cityLng);
          this.sector.push(location.sector);
          this.swot.push(location.swot);
          this.city.push(location.city);
          this.country.push(location.country);
          this.insight.push(location.insight);
        }
        console.log(response);
      },
      error=> console.log(error)
    );
  }

  showMap(lat:number,lng:number) {
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_blank');
  }
}
