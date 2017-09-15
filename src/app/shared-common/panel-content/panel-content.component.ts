
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.scss']
})
export class PanelContentComponent implements OnInit {


  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }


}
