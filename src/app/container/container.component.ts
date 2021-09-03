import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ElementDef } from '@angular/core/src/view';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public left = 0;
  public top = 0;
  public transitionDuration = 1;
  constructor() {
  }

  ngOnInit() {}
  onClick(event) {
    this.left = event.offsetX;
    this.top = event.offsetY;
  }
  onInputChange(event) {
    this.transitionDuration = event.target.value;
  }
}
