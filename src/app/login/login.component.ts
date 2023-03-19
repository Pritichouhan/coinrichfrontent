import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user-service.service';
import { LoginRequest } from '../loginrequest';
import { SharedDataService } from '../sharedDataService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('myForm') myForm!: NgForm;
  loginRequest: LoginRequest = new LoginRequest;
  errorMessage!: string;
  success!: string;

  constructor(private fb: FormBuilder, private authService: UserService, private router: Router,private sharedDataService: SharedDataService) { }


  login(): void {
    this.authService.loginUser(this.loginRequest).subscribe(
      response => {
        this.sharedDataService.setData('username', this.loginRequest.username);
        console.log('Login successful!');
        this.router.navigate(['/profile']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }
}


