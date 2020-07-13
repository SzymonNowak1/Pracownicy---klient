import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() title: string = 'Untitled';
  @Input() addButton: boolean = false;
  
  @Output() addClicked: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

  clickedPlus() {
    this.addClicked.emit();
  }

}
