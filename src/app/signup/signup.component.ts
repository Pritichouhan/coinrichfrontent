import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @ViewChild('myForm') myForm!: NgForm;
  user: User = new User();
  errorMessage: string | undefined;

  constructor(private userService: UserService, private router: Router) { }

  signUp(): void {
    this.userService.signUpUser(this.user).subscribe(
      response => {
        console.log('Sign up successful!');
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
      }
    );
  }
}

