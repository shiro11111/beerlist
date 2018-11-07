import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {BeerListComponent} from './list/beer-list.component';

const listRoutes: Routes = [
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  { path: 'list', component: BeerListComponent},
  { path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(listRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
