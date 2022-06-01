import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kasia-component',
  templateUrl: './kasia-component.component.html',
  styleUrls: ['./kasia-component.component.css']
})
export class KasiaComponentComponent implements OnInit {

  visibility:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(){
    this.visibility = !this.visibility;
  }
}
  


