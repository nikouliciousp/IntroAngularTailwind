import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Joke } from '../app.interfaces';

@Component({
  selector: 'app-chuck-norris',
  templateUrl: './chuck-norris.component.html',
  styleUrls: ['./chuck-norris.component.css'],
})
export class ChuckNorrisComponent implements OnInit {
  componentName = 'Chuck Norris Component';
  joke = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJoke();
  }

  fetchJoke(): void {
    this.http
      .get<Joke>('https://api.chucknorris.io/jokes/random')
      .subscribe((joke: Joke) => {
        this.joke = joke.value;
        console.log(joke.value);
      });
  }
}
