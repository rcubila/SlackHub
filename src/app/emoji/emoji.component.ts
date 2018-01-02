import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.css']
})
export class EmojiComponent implements OnInit {
  open: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  getOpen() {
    return this.open;
  }

  toggle() {
    this.open = !this.open;
  }

  emojis() {
    return [
      {key: "+1", url: "https://github.global.ssl.fastly.net/images/icons/emoji/+1.png?v5"},
      {key: "-1", url: "https://github.global.ssl.fastly.net/images/icons/emoji/-1.png?v5"},
      {key: "100", url: "https://github.global.ssl.fastly.net/images/icons/emoji/100.png?v5"},
      {key: "1234", url: "https://github.global.ssl.fastly.net/images/icons/emoji/1234.png?v5"},
      {key: "8ball", url: "https://github.global.ssl.fastly.net/images/icons/emoji/8ball.png?v5"},
      {key: "a", url: "https://github.global.ssl.fastly.net/images/icons/emoji/a.png?v5"},
      {key: "ab", url: "https://github.global.ssl.fastly.net/images/icons/emoji/ab.png?v5"}
    ];
  }



}
