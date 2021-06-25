import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './page/home/home.component';
import { DetailsJobComponent } from './page/details-job/details-job.component';

const routes: Routes = [
  {
    path: "", pathMatch: 'full', redirectTo: "home"
  },

  {
    path: "home", pathMatch: 'full', component: HomeComponent
  },

  {
    path: "detalles-del-empleo", component: DetailsJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
