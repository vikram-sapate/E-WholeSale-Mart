import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    if (this.form.valid) {
      this.error = null;
      // back-end call
      // if (account.password == this.form.value.password) {
      if (true) {
        this.router.navigate(['home']);
      } else {
        this.error = 'Username or password invalid';
      }
    } else {
      this.error = 'Username or password invalid';
    }
  }
}
