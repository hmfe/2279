import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public fetchData(input: string): Observable<string[]> {
    return this.http.get<string[]>('https://api.datamuse.com/words?sp=' + input + '*');
  }
}
