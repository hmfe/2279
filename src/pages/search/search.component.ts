import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SearchHistoryService } from '../../services/search-history.service';
import { SearchHistory } from '../../services/history.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  historyList$: Observable<SearchHistory[]>;
  autocompleteList$: Observable<string[]>;
  constructor(private searchService: SearchService, private searchHistoryService: SearchHistoryService) {
    this.getSearchHistoryList();
  }

  searchedItem(value) {
    if (value) {
      this.autocompleteList$ = this.searchService.fetchData(value);
    }
  }

  selectedWord(value) {
    if (value) {
      let searchWord = { searchWord: value, date: new Date() };
      this.searchHistoryService.add(searchWord);
    }
  }

  getSearchHistoryList() {
    this.historyList$ = this.searchHistoryService.selectHistory();
  }

  deleteItem(id) {
    this.searchHistoryService.delete(id);
    this.getSearchHistoryList();
  }

  clearHistory() {
    this.searchHistoryService.clear();
  }
  ngOnInit() {
  }

}
