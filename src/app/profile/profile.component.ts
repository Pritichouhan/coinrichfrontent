import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../loginrequest';
import { SharedDataService } from '../sharedDataService';
import { User } from '../user';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userDetails : any;
  errorMessage: any;
  username!: String;
  loginRequest!: LoginRequest

  constructor(private userService: UserService, private router: Router, private sharedDataService:SharedDataService) {
    this.username = this.sharedDataService.getData('username');
    
   }


  ngOnInit() {
    this.userService.userDetails(this.username).subscribe( profile => {
      this.userDetails = profile;
        console.log(this.userDetails)
      
    },
    error => {
      console.log(error);
      this.errorMessage = error.error.message;
    }
  );
  }

}
