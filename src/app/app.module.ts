import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Data } from 'src/app/data';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SectorsByMaxLifeComponent } from './sectors-by-max-life/sectors-by-max-life.component';
import { SectorsByImpactComponent } from './sectors-by-impact/sectors-by-impact.component';
import { FewMostImportantSectorsComponent } from './few-most-important-sectors/few-most-important-sectors.component';
import { PestleWisePercentagesComponent } from './pestle-wise-percentages/pestle-wise-percentages.component';
import { ChartModule } from 'angular-highcharts';
import { LocationsTabComponent } from './locations-tab/locations-tab.component';
import { TitlesTabComponent } from './titles-tab/titles-tab.component';
import { ContactUsTabComponent } from './contact-us-tab/contact-us-tab.component';
import { HelpTabComponent } from './help-tab/help-tab.component';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topics/topics.component';
import { TopicsByDurationComponent } from './topics-by-duration/topics-by-duration.component';
import { TopicsPieChartComponent } from './topics-pie-chart/topics-pie-chart.component';
import { TopicsSplineChartComponent } from './topics-spline-chart/topics-spline-chart.component';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DashbaordComponent,
    MainComponent,
    TopWidgetsComponent,
    SectorsByMaxLifeComponent,
    SectorsByImpactComponent,
    FewMostImportantSectorsComponent,
    PestleWisePercentagesComponent,
    LocationsTabComponent,
    TopicsComponent,
    TopicsByDurationComponent,
    TopicsPieChartComponent,
    TopicsSplineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatSelectModule,
    ReactiveFormsModule,
    ChartModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard/main', pathMatch: 'full' },
      { path: 'dashboard/main', component: MainComponent },
      { path: 'dashboard/locations', component: LocationsTabComponent },
      { path: 'dashboard/topics', component: TopicsComponent },
      { path: 'dashboard/topics/titles', component: TitlesTabComponent },
      { path: 'dashboard/contact-us', component: ContactUsTabComponent },
      { path: 'dashboard/help', component: HelpTabComponent }
    ]),
    GoogleMapsModule,
    CommonModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public static data:Data[];
}
