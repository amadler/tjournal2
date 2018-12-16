import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TradeSetup } from './trade-setup-model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TradeSetupService {

  apiUrl = environment.apiUrl + '/tradeSetups';
  constructor(private http: HttpClient) { }

  getTradeSetupList(): Observable<TradeSetup[]> {
    // now returns an Observable of Config
    return this.http.get<TradeSetup[]>(this.apiUrl);
  }

  getTradeSetup(id): Observable<TradeSetup> {
    // now returns an Observable of Config
    return this.http.get<TradeSetup>(`${this.apiUrl}/${id}`);
  }
  createTradeSetup(query: TradeSetup): Observable<TradeSetup> {
    // now returns an Observable of Config
    return this.http.post<TradeSetup>(this.apiUrl, query);
  }
  updateTradeSetup(query: TradeSetup, id: string): Observable<TradeSetup> {
    // now returns an Observable of Config
    query.id = id;
    return this.http.put<TradeSetup>(this.apiUrl, query);
  }

  deleteTradeSetup(id): Observable<TradeSetup> {
    // now returns an Observable of Config
    return this.http.delete<TradeSetup>(id);
  }
}
