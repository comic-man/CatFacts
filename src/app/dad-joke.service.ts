import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DadJokeService {
  private apiUrl = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) {
  }

  // Fetch random dad jokes
  getDadJoke(): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/json'); // Add the Accept header
    return this.http.get<any>(this.apiUrl, { headers });
  }
}
