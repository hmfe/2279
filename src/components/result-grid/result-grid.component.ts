import { Component, OnInit , Input ,Output, EventEmitter} from '@angular/core';
import {SearchHistory} from '../../services/history.model';
@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.css']
})
export class ResultGridComponent implements OnInit {

  @Input() historyList: SearchHistory[];
  @Output() deleteItem = new EventEmitter();
  @Output() clear= new EventEmitter();
  constructor(  ) {
    var x = this.historyList;
   }

  ngOnInit() {
  }

  deleteItemHistory(id : number)
  {
    this.deleteItem.emit(id);
  }
  clearHistory(){
      this.clear.emit();
  }
}
