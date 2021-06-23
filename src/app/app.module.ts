import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHeroComponent } from './show-hero/show-hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ShowDetailHeroComponent } from './show-detail-hero/show-detail-hero.component';
import { HeroService } from './hero.service';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { ShowOrganisationComponent } from './show-organisation/show-organisation.component';
import { CreateOrganisationComponent } from './create-organisation/create-organisation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowHeroComponent,
    HeroesComponent,
    ShowDetailHeroComponent,
    OrganisationListComponent,
    ShowOrganisationComponent,
    CreateOrganisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // a ajouter pour les formulaires reactiveforms
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
