import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'validator-form',
  templateUrl: './validator-form.component.html',
  styleUrls: ['./validator-form.component.scss']
})
export class ValidatorFormComponent implements OnInit {

  public userForm: FormGroup;
  // public username1: string;
  constructor() { }

  ngOnInit() {
    // 响应表单
    this.userForm = new FormGroup({
      'username1': new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  // get username() {
  //   console.log(this.userForm.get('username'));
  //   return this.userForm.get('username');
  // }

  showRef(usernameRef) {
    console.log(usernameRef);
  }
  showReactiveRef() {
    console.log(this.userForm);
  }
}
