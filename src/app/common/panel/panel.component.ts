import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  @Input() title: string = 'untitled';
  @Input() isOpen: boolean = false;
  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
  }

  close() {
    this.closeClicked.emit();
  }

}
