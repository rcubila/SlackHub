import { Component, OnInit } from '@angular/core';
import {Emoji2Service} from "../service/emoji2.service";
import {Emoji2} from "../model/Emoji2";

@Component({
  selector: 'app-emoji2',
  templateUrl: './emoji2.component.html',
  styleUrls: ['./emoji2.component.css']
})
export class Emoji2Component implements OnInit {
  open: boolean = false;

  emoji2: Emoji2;
  constructor(private emoji2Service: Emoji2Service) { }

  getEmoji(){
   return this.emoji2Service.getEmoji2()
      .subscribe(pepe => {
        console.log(pepe);
        this.emoji2 = pepe;
        console.log(this.emoji2)
    })
  }

  getOpenEmoji2() {
    return this.open;
  }

  toggleEmoji2() {
    this.open = !this.open;
  }

  ngOnInit() {
  }

}
