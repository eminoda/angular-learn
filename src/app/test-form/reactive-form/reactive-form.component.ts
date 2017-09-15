import { Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  form1: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm1();
  }

  public initForm1() {
    // this.form1 = new FormGroup({
    //   name: new FormControl()
    // });
    // FormBuilder.group是一个用来创建FormGroup的工厂方法
    this.form1 = this.fb.group({
      name: ['', Validators.required],
      childName: this.fb.group({
        age: '',
        sex: ''
      })
    });
  }

  showFormData(form) {
    console.log(form);
  }
}
