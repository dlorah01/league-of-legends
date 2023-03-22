import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DdragonService {

  URL_DATA_VERSION = 'https://ddragon.leagueoflegends.com/api/versions.json'
  dataVersion !: string
  URL = 'https://ddragon.leagueoflegends.com/cdn/'

  constructor(private http: HttpClient) {
    this.getDDragonDataVersion()
   }

  getDDragonDataVersion(): Observable<string[]> {
    return this.http.get<string[]>(this.URL_DATA_VERSION)
  }

  getChampions(version: string): Observable<any> {
    return this.http.get<any>(`${this.URL}${version}/data/en_US/champion.json`).pipe(map((resp) => resp.data))
  }
}
