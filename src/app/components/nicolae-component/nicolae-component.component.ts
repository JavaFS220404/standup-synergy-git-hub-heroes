import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nicolae-component',
  templateUrl: './nicolae-component.component.html',
  styleUrls: ['./nicolae-component.component.css']
})
export class NicolaeComponentComponent implements OnInit {

  visibility: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility() {
    this.visibility = !this.toggleVisibility;
  }

}
