import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details/details.component';

const listRoutes: Routes = [
  { path: 'details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(listRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
