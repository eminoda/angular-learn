import { Nav } from './../model/nav';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  // 导航栏（左侧 ）
  public navs: Array<Nav> = [{
    name: '模板Template',
    url: '/home/component/template'
  }, {
    name: '生命周期LifeCycle',
    url: '/home/component/life'
  }, {
    name: '组件通信Comm.',
    url: '/home/component/communication'
  }];

  constructor() {
    console.log('TestComponentComponent');
  }

  ngOnInit() {
  }

}
