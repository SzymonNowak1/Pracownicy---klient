import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit, OnChanges {

  @Input() isOpen = false;
  @Input() title = '';
  @Input() context;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if ( this.isOpen ) {
      document.getElementById("overlayed2").style.display = "block";
    } else {
      document.getElementById("overlayed2").style.display = "none";
    }
  }

  close() {
    this.isOpen = false;
    document.getElementById("overlayed2").style.display = "none";
  }

}
