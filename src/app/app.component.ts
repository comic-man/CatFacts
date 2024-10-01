import {ChangeDetectorRef, Component, OnInit,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DadJokeService} from "./dad-joke.service";
import {CommonModule, NgForOf} from "@angular/common";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Dad Jokes';
  dadJoke: string = '';

  constructor(private dadJokeService: DadJokeService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.generateDadJoke()
  }

  // Function to generate a random dad joke
  generateDadJoke(): void {
    this.dadJokeService.getDadJoke().subscribe((data: any) => {
      console.log(data);
      this.dadJoke = data.joke;
      console.log(this.dadJoke);
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching joke:', error);
    });
  }
}
