import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paul-component',
  templateUrl: './paul-component.component.html',
  styleUrls: ['./paul-component.component.css']
})
export class PaulComponentComponent implements OnInit {

  visibility:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(){
    this.visibility = !this.visibility;
  }

}
