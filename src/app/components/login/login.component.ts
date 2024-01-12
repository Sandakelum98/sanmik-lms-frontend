
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  login() {
    const login = {
      "userName": this.username.value,
      "password": this.password.value
    }
    console.log(login);

    this.authService.login(login).subscribe({
      next: (resp: any) => {
        console.log(resp);
        localStorage.setItem('token', resp.data.token)
        this.router.navigateByUrl('home')
      }, error: (err: any) => {
        console.log(err);
        this.toastr.error('Login faied');

        // if (err.error && err.error.message) {
        //   this.toastr.error(err.error.message, 'Error');
        // } else {
        //   this.toastr.error('An unexpected error occurred', 'Error');
        // }

      },
    })

  }



}