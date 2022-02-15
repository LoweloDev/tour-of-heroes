import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Hero} from "../../shared/models/hero";
import {HeroService} from "../../shared/services/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Observable<Hero[]>;


  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
