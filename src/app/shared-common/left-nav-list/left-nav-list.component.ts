import { Nav } from './../../model/nav';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'left-nav-list',
  templateUrl: './left-nav-list.component.html',
  styleUrls: ['./left-nav-list.component.scss']
})
export class LeftNavListComponent implements OnInit {

  @Input() navs: Array<Nav>;
  constructor() { }

  ngOnInit() {
  }

}
