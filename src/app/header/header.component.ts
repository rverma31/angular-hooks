import { Component, OnInit ,Input, OnChanges ,SimpleChanges, SimpleChange} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from "src/app/services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() message: String;
  allMsgChangeLogs: string[] = [];

  isLoggedIn: Boolean;
  loggedInUser: string;

  constructor(
    private router: Router,
    private authService : AuthService,
    private afAuth: AngularFireAuth,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
      if (auth && auth.uid) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Header component NgOnChanges Triggered");
  }

  onLogOut() {
    this.authService.logout();
    this.flashMessage.show("you are now logged Out", {
      cssClass: "alert-success",
      timeout: 4000
    });
    this.router.navigate(['/login']);
  }
}
