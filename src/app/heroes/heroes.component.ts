import {Component, OnInit} from '@angular/core';
import {Hero} from '../../shared/models/hero';
import {Observable} from 'rxjs';
import {HeroService} from "../../shared/services/hero.service";
import {MessageService} from "../../shared/services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  public selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public onSelect(selectedHero: Hero): void {
    this.selectedHero = selectedHero;
    this.messageService.add(`HeroesComponent: Selected hero id=${selectedHero.id}`);
  }

  public getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  // // same as above but above needs | async pipe in html while this one doesn't
  // // but this one instead needs to be unsubscribed from manually
  // public getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }
}
