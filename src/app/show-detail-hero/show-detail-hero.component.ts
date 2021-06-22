import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Hero } from '../business/Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-show-detail-hero',
  templateUrl: './show-detail-hero.component.html',
  styleUrls: ['./show-detail-hero.component.scss']
})
export class ShowDetailHeroComponent implements OnInit {
  id?:number;
  currentHero?:Hero;
  constructor(  private route: ActivatedRoute,private heroService: HeroService) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.currentHero = this.heroService.getOneHero(this.id!);
  }

}
