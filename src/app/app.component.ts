import { Component, OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CatFactService} from "./cat-fact.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Cat-Facts';

  catFacts: any[] = [];

  constructor(private catFactService: CatFactService) {}

  ngOnInit(): void {
    this.catFactService.getCatFacts().subscribe((data) => {
      this.catFacts = data; // Assign the fetched data to the catFacts array
    });
  }
}
