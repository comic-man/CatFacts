import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CatFact {
  text: string;
  type: string;
  user: string;
  upvotes: number;
}

@Injectable({
  providedIn: 'root',
})
export class CatFactService {
  private apiUrl = 'https://cat-fact.herokuapp.com/facts';

  constructor(private http: HttpClient) {}

  // Fetch random cat facts
  getCatFacts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Fetch a single cat fact by ID
  getCatFactById(id: string): Observable<CatFact> {
    return this.http.get<CatFact>(`${this.apiUrl}/${id}`);
  }
}

