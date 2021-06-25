import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

//components
import { AppComponent } from './app.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { FilterJobSearchComponent } from './components/filter-job-search/filter-job-search.component';
import { ResultJobsComponent } from './components/result-jobs/result-jobs.component';
import { HomeComponent } from './page/home/home.component';
import { DetailsJobComponent } from './page/details-job/details-job.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    FilterJobSearchComponent,
    ResultJobsComponent,
    HomeComponent,
    DetailsJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
