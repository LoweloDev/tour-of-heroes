import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../shared/models/hero";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../../shared/services/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // TODO exact usage of Annotation?
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService,
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    // gets id from url
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

}
