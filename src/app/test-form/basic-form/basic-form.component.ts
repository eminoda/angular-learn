import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  value: string;

  values: any = '';

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.values += event.target.value + ' | ';
  }

  onEnter(value: string) { this.value = value; }

  update(value: string) {
    console.log('blur');
    this.value = '';
  }
}
