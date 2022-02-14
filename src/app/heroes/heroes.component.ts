import {Component, OnInit} from '@angular/core';
import {Hero} from '../../shared/models/hero';
import {Observable} from 'rxjs';
import {HEROES} from '../../shared/models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  hero: Hero = {id: 1, name: 'Windstorm'};
  heroes: Observable<Hero[]> = HEROES;
  public selectedHero?: Hero;

  constructor() {
  }

  ngOnInit(): void {
  }

  public method(): void {
    console.log(this.hero.name);
  }

  public onSelect(selectedHero: Hero): void {
    this.selectedHero = selectedHero;
  }

}
