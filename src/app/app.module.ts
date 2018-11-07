import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './list/beer-list.component';
import {BeerListEffects} from './list/beer-list.effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from './app.reducers';
import {BeerListService} from './list/beer-list.service';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatCardModule } from '@angular/material';
import { DetailsComponent } from './details/details.component';
import {BeerDetailsEffects} from './details/beer-details.effects';
import {BeerDetailsService} from './details/beer-details.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    [BrowserAnimationsModule],
    [MatButtonModule, MatCheckboxModule],
    MatCardModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([
      BeerListEffects,
      BeerDetailsEffects
    ])
  ],
  providers: [BeerListService, BeerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
