import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  router!: Router;
  sharedService!: SharedService;

  constructor(router:Router,sharedService:SharedService) {
    this.router = router;
    this.sharedService = sharedService;
  }

  loadDashboard() {
    this.sharedService.enableSelectFilters();
    console.log('loading Dashboard..........');
  }

  loadLocations() {
    this.sharedService.enableSelectFilters();
    console.log('loading Locations..........');
  }

  loadTopics() {
    this.sharedService.enableSelectFilters();
    console.log('loading Topics.............');
  }

  loadTitles() {
    this.sharedService.enableSelectFilters();
    console.log('loading Titles.............');
  }

  loadContactUs() {
    this.sharedService.disableSelectFilters();
    console.log('loading Contact us.........');
  }

  loadHelp() {
    this.sharedService.disableSelectFilters();
    console.log('loading Help...............');
  }
}
