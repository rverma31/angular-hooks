import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email :string;
  password: string;

  constructor(
    private authService: AuthService,
    private router :Router,
    private flashMessage: FlashMessagesService,
    private afAuth : AngularFireAuth
    ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe( auth => {
      if(auth && auth.uid) {
        console.log('user is logged in');
        this.router.navigate(['/']);
      } else {
        console.log('user is logout');
      }
    });
  }
  

  onSubmit() {
    this.authService.login(this.email,this.password)
    .then( res => {
      this.flashMessage.show('you are now loggedin',{
        cssClass:'alert-success',timeout :4000
      });
      this.router.navigate(['/']);
    })
    .catch( err => {
      this.flashMessage.show(err.message, {
        cssClass: "alert-danger",
        timeout: 4000
      });
    });
  }
  

}
