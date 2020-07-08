import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '../page-event';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  @Input() startingPage: number = 1;
  @Input() perPage: number = 10;
  @Input() totalPages: number = 1;

  page: number = this.startingPage;

  @Output() changed: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  ngOnInit(): void {
  }

  first() {
    this.page = 1;
    this.emit();
  }

  prev() {
    if ( this.page > 1 ) {
      this.page = this.page - 1;
    }
    this.emit();
  }

  next() {
    if ( this.page < this.totalPages ) {
      this.page = this.page + 1;
    }
    this.emit();
  }

  last() {
    this.page = this.totalPages;
    this.emit();
  }

  emit() {
    this.changed.emit( new PageEvent(this.page, this.totalPages)  );
  }

}
