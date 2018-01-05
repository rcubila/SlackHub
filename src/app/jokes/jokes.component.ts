///<reference path="../service/joke.service.ts"/>
import { Component, OnInit } from '@angular/core';
import {JokeService} from "../service/joke.service";
import {Joke} from "../model/Joke";


@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  joke: Joke;
  constructor(private jokeService: JokeService) {

  }
  getJoke(){
    this.jokeService.getJoke()
      .subscribe(res => {
        console.log(res);
        this.joke = res;
        document.getElementById('con2').style.display = 'block';
      });
  }

  ngOnInit() {
  }



}
