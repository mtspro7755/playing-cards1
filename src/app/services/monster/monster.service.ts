import { Injectable } from '@angular/core';
import {Monster} from "../../models/monster.model";
import {MonsterType} from "../../utils/monster.utils";

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsters:Monster[]=[];
  currentIndex=1;

  constructor() {
    this.load();
  }


  private save(){
    localStorage.setItem('monsters',JSON.stringify(this.monsters));
  }


  private load(){
    const monsterData=localStorage.getItem('monsters');
    if(monsterData){
      this.monsters=JSON.parse(monsterData).map((monsterJSON:any)=>Object.assign(new Monster(), monsterJSON));
      this.currentIndex=Math.max(...this.monsters.map(monster=>monster.id));
    }else{
      this.init();
      this.save();
    }
  }




  private init(){
    this.monsters=[];

    const monster1 = new Monster();
    monster1.name = 'Electric';
    monster1.hp = 20;
    monster1.figureCaption = 'N°002 Monster';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = 'Water';
    monster2.image='assets/img/water.png';
    monster2.type=MonsterType.WATER;
    monster2.hp = 70;
    monster2.figureCaption = 'N°003 Monster';
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.name = 'Fire';
    monster3.image='assets/img/fire.png';
    monster3.type=MonsterType.FIRE;
    monster3.hp = 90;
    monster3.figureCaption = 'N°004 Monster';
    this.monsters.push(monster3);


    const monster4 = new Monster();
    monster4.name = 'Plant';
    monster4.image='assets/img/plant.png';
    monster4.type=MonsterType.PLANT;
    monster4.hp = 29;
    monster4.figureCaption = 'N°005 Monster';
    this.monsters.push(monster4);
  }


  getAll():Monster[]{
    return this.monsters.map(monster=>monster.copy());
  }



  get(id:number):Monster | undefined{
    const monster=this.monsters.find(monster=>monster.id === id);
    return monster ? monster.copy() : undefined;
  }


  add(monster:Monster):Monster{
    const monsterCopy=monster.copy();

    monsterCopy.id=this.currentIndex;
    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;
    this.save();

    return monsterCopy;

  }


  update(monster:Monster):Monster{
    const monsterCopy=monster.copy();

    const monsterIndex=this.monsters.findIndex(originalMonster=>originalMonster.id === monster.id);
    if (monsterIndex !=-1) {
      this.monsters[monsterIndex]=monsterCopy.copy();
      this.save();

    }

    return monsterCopy;
  }

  delete(id:number){
    const monsterIndex=this.monsters.findIndex(originalMonster=>originalMonster.id === id);
    if (monsterIndex !=-1) {
      this.monsters.splice(monsterIndex,1);
      this.save();
    }
  }



}
