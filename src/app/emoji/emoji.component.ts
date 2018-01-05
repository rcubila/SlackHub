import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmojiService} from "../service/emoji.service";

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {
  open: boolean = false;

  emoji = [];

  @Output() emojiClicked: EventEmitter<any> = new EventEmitter();

  constructor(private emojiService: EmojiService) {
  }

  getOpen() {
    return this.open;
  }

  toggle() {
    this.open = !this.open;
  }

  getEmoji(){
    this.emojiService.getEmoji()
      .subscribe(result => {
        this.emoji = this.parseEmojis(result.emojiMap);
      })
  }

  parseEmojis(emoji) {
    let result = [];
    for (let key in emoji) {
      result.push({key, code: emoji[key]});
    }
    return result;
  }


  ngOnInit() {
    this.getEmoji();
  }

  onEmojiClicked(code): void {
    this.emojiClicked.emit([code]);
  }
}
