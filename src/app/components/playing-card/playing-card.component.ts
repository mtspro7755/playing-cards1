import {Component, computed, input, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Monster} from "../../models/monster.model";
import {MonsterTypeProperties} from "../../utils/monster.utils";



@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  monster=input(new Monster());

  MonsterTypeIcone=computed(()=>{
    return MonsterTypeProperties[this.monster().type].imageUrl;
  });
  backgroundColor=computed(()=>{
    return MonsterTypeProperties[this.monster().type].color;
  });





}
