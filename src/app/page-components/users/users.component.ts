import { Component, OnInit, OnDestroy} from '@angular/core';
import { Users } from '../../models/users';
import { UsersInfoService } from 'src/app/services/users-info.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, OnDestroy {
  
  userInfo : Users[]; // user model
  private _usersubscription : Subscription;

  constructor(private usersService : UsersInfoService) { }

  ngOnInit() {
    console.log("User Component calling ===> ngOnInit");
    this._usersubscription = this.usersService.getUsersInfo().subscribe( userData => {
      this.userInfo = userData;
    });
  }
  
  ngOnDestroy() {
    console.log("User Component calling ===> ngOnDestroy");
    this._usersubscription.unsubscribe();
  }
  

}
