import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChampionDetail } from '../champions/champion-detail/models/champion-detail';
import { ChampionDetailResponse } from '../champions/champion-detail/models/champion-detail-response';
import { Champion } from '../champions/models/champion';
import { ChampionResponse } from '../champions/models/champion-response';
import { Item } from '../items/models/item';
import { ItemResponse } from '../items/models/item-response';

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

  getChampions(version: string): Observable<Champion[]> {
    return this.http.get<ChampionResponse>(`${this.URL}${version}/data/en_US/champion.json`).pipe(map((resp) => resp.data))
  }

  getItems(version: string): Observable<Item[]> {
    return this.http.get<ItemResponse>(`${this.URL}${version}/data/en_US/item.json`).pipe(map((resp) => resp.data))
  }

  getChampionDetails(championId: string, version: string): Observable<{championId: ChampionDetail}> {
    return this.http.get<ChampionDetailResponse>(`${this.URL}${version}/data/en_US/champion/${championId}.json`).pipe(map((resp) => resp.data))
  }
}
