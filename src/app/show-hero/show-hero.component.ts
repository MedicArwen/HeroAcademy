import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../business/Hero';

@Component({
  selector: 'app-show-hero',
  templateUrl: './show-hero.component.html',
  styleUrls: ['./show-hero.component.scss']
})
export class ShowHeroComponent implements OnInit {

  @Input() currentHero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
