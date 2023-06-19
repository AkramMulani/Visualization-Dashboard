import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  locations: number = 0;
  sectors: number = 0;
  topics: number = 0;
  titles: number = 0;

  http!: HttpClient;

  filterSubscription!: Subscription;

  constructor(http:HttpClient,service: SharedService) {
    this.http = http;
    http.get<number>("http://localhost:8080/api/count/city").subscribe(
      (response)=> {
        this.locations = response;
        console.log(response);
      },
      (error)=> {
        console.log(error);
      }
    );
    http.get<number>("http://localhost:8080/api/count/sector").subscribe(
      (response)=> {
        this.sectors = response;
        console.log(response);
      },
      (error)=> {
        console.log(error);
      }
    );
    http.get<number>("http://localhost:8080/api/count/topic").subscribe(
      (response)=> {
        this.topics = response;
        console.log(response);
      },
      (error)=> {
        console.log(error);
      }
    );
    http.get<number>("http://localhost:8080/api/count/title").subscribe(
      (response)=> {
        this.titles = response;
        console.log(response);
      },
      (error)=> {
        console.log(error);
      }
    );

    this.filterSubscription = service.filterValue$.subscribe((value)=>{
      this.changeCounts(value);
    });
  }

  changeCounts(value:{key:string,val:string}[]) {
    
  }
}
