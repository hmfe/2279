import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

  @Output() searchedItem;
  @Input() autocompleteList: string[];
  @Output() selectedWord = new EventEmitter();

  searchUpdated: Subject<string> = new Subject();
  InputText: string;

  constructor() {
    this.searchedItem = this.searchUpdated.asObservable()
      .pipe(debounceTime(200))
      .pipe(distinctUntilChanged());
  }

  InputChanged($newVal: string) {
    this.InputText = $newVal;
    this.searchUpdated.next($newVal);
    if (!$newVal) {
      this.autocompleteList = [];
    }
  }
  selectedItem(value: string) {
    if (value) {
      this.InputText = '';
      this.autocompleteList = [];
      this.selectedWord.emit(value);
    }
  }


}
