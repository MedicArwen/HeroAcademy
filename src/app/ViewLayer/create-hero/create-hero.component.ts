import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/BusinessLayer/Hero';
import { HeroService } from 'src/app/DataLayer/hero.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.scss']
})
export class CreateHeroComponent implements OnInit {

  /**
   *     private _pseudo:string;
    private _nom:string;
    private _prenom:string;
    private _estSuperVilain:boolean;
    private _image:string;
    private _shortText:string;
    private _longText:string;
   */
  pseudo = new FormControl('',[Validators.required,Validators.minLength(4)]);
  nom = new FormControl('',[Validators.required,Validators.minLength(4)]);
  prenom = new FormControl('',[Validators.required,Validators.minLength(4)]);
  
  estSuperVilain = new FormControl('',[Validators.required]);
  image = new FormControl('',[Validators.required,Validators.minLength(4)]);
  shortText = new FormControl('',[Validators.required,Validators.minLength(4)]);
  longText = new FormControl('',[Validators.required,Validators.minLength(4)]);
  
  form = new FormGroup(
      {
        pseudo:this.pseudo,
        nom:this.nom,
        prenom:this.prenom,
        estSuperVilain:this.estSuperVilain,
        image:this.image,
        shortText:this.shortText,
        longText:this.longText})
  constructor(private heroService:HeroService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    const currentHero = new Hero(
              this.form.value['pseudo'],
              this.form.value['nom'],
              this.form.value['prenom'],
              this.form.value['estSuperVilain'],
              this.form.value['image'],
              this.form.value['shortText'],
              this.form.value['longText'])
              this.heroService.createHero(currentHero);
              this.router.navigate(['/heroes-list']);
 
  }
}
