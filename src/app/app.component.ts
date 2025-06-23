import {Component, computed, effect, inject, model, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PlayingCardComponent} from "./components/playing-card/playing-card.component";
import {Monster} from "./models/monster.model";
import {MonsterType} from "./utils/monster.utils";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {NgForOf, NgIf} from "@angular/common";
import {MonsterService} from "./services/monster/monster.service";
import {MonsterListComponent} from "./pages/monster-list/monster-list.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent, NgForOf, NgIf, MonsterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {






}
