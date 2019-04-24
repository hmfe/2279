import { Injectable } from '@angular/core';

import { SearchHistory } from '../services/history.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  private historyList$: BehaviorSubject<SearchHistory[]>;

  constructor() {
    // load
    const historyListFromStorage = this.loadSearchHistory();
    this.historyList$ = new BehaviorSubject(historyListFromStorage);

    // ================================================================
    this.historyList$.subscribe(h => {
      this.saveStorageHistory(h);
    });
  }

  selectHistory(): Observable<SearchHistory[]> {
    return this.historyList$.asObservable();
  }

  add(item: SearchHistory): number {
    item.id=new Date().getTime();
    const newValue = [
      ...this.historyList$.value,
      item];
    this.historyList$.next(newValue);
    return item.id;
  }

  selectLastItem(): number
  {
    const arr = this.historyList$.value;
    return arr.indexOf[arr.length].id;
  }

  delete(id: number) {
    const arr = this.historyList$.value;
    const ndx = arr.findIndex(i => i.id === id);
    arr.splice(ndx, 1);
    this.historyList$.next(arr);
  }

  clear() {
    this.historyList$.next([]);
  }

  private saveStorageHistory(historyList: SearchHistory[]): void {
    localStorage.setItem('history', JSON.stringify({ historyList }));
  }

  private loadSearchHistory(): SearchHistory[] {
    const localStorageItem = JSON.parse(localStorage.getItem('history'));
    return localStorageItem == null ? [] : localStorageItem.historyList;
  }
}
