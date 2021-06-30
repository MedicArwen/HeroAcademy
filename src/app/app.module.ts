import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHeroComponent } from './ViewLayer/show-hero/show-hero.component';
import { HeroesComponent } from './ViewLayer/heroes/heroes.component';
import { ShowDetailHeroComponent } from './ViewLayer/show-detail-hero/show-detail-hero.component';
import { HeroService } from './DataLayer/hero.service';
import { OrganisationListComponent } from './ViewLayer/organisation-list/organisation-list.component';
import { ShowOrganisationComponent } from './ViewLayer/show-organisation/show-organisation.component';
import { CreateOrganisationComponent } from './ViewLayer/create-organisation/create-organisation.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateHeroComponent } from './ViewLayer/create-hero/create-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowHeroComponent,
    HeroesComponent,
    ShowDetailHeroComponent,
    OrganisationListComponent,
    ShowOrganisationComponent,
    CreateOrganisationComponent,
    CreateHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // a ajouter pour les formulaires reactiveforms
    HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
