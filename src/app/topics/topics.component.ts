import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent {
  topics: string[] = [];
  topic: string[] = [];
  sectors: string[] = [];
  durations: number[] = [];
  intensities: number[] = [];
  addedOn: string[] = [];
  publishedOn: string[] = [];
  http!: HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
    http.get<string[][]>("http://localhost:8080/api/data/topics").subscribe(
      response=>{
        this.sectors = response.map(item=> item[0]);
        this.topic = response.map(item=> item[1]);
        this.durations = response.map(item=> +item[2]);
        this.intensities = response.map(item=> +item[3]);
        this.addedOn = response.map(item=> item[4]);
        this.publishedOn = response.map(item=> item[5]);
        this.topics.push("All");
        let t = response.map(item=>item[1]);
        response.forEach(element => {
          this.topics.push(element[1]);
        });
        console.log(response);
      }
    );
  }

  changeTopics(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedOption = target.value;
    this.http.post<string[][]>("http://localhost:8080/api/data/topics/change",selectedOption).subscribe(
      response=> {
        this.sectors = response.map(item=> item[0]);
        this.topic = response.map(item=> item[1]);
        this.durations = response.map(item=> +item[2]);
        this.intensities = response.map(item=> +item[3]);
        this.addedOn = response.map(item=> item[4]);
        this.publishedOn = response.map(item=> item[5]);
        console.log(response);
      },
      error=> console.log(error)
    );
  }
}
