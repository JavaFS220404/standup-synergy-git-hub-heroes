import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-andres-component',
  templateUrl: './andres-component.component.html',
  styleUrls: ['./andres-component.component.css']
})
export class AndresComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  visibility: boolean = true;

  toggleVisibility() {
    this.visibility = !this.visibility;
  }

}
