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


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([
      BeerListEffects
    ])
  ],
  providers: [BeerListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
