import { Nav } from './../model/nav';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  // 导航栏（左侧 ）
  public navs: Array<Nav> = [{
    name: '表单基础',
    url: '/home/form/basic'
  }, {
    name: '模板驱动表单TemplateDriven',
    url: '/home/form/template'
  }, {
    name: '响应式表单ReactiveForm',
    url: '/home/form/reactive'
  }, {
    name: '动态表单DynamicForm',
    url: '/home/form/dynamic'
  }, {
    name: '表单验证',
    url: '/home/form/validator'
  }];

  constructor() {
    console.log('TestComponentComponent');
  }

  ngOnInit() {
  }

}
