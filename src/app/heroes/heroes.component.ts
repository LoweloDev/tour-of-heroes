import {Component, OnInit} from '@angular/core';
import {Hero} from '../../shared/models/hero';
import {HeroService} from "../../shared/services/hero.service";
import {MessageService} from "../../shared/services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  public selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public add(name: string): void {
    name = name.trim();

    if (!name) {
      return;
    }

    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  public onSelect(selectedHero: Hero): void {
    this.selectedHero = selectedHero;
    this.messageService.add(`HeroesComponent: Selected hero id=${selectedHero.id}`);
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter(item => item !== hero);
    this.heroService.deleteHero(hero.id);
  }

  // // same as above but above needs | async pipe in html while this one doesn't
  // // but this one instead needs to be unsubscribed from manually
  // public getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }
}
