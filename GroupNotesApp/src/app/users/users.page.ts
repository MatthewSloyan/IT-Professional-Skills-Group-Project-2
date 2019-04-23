import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_services/login.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { AuthProvider } from '../_services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  // users: any = [];
  users = [];

  constructor(private ls: LoginService, public afDatabase: AngularFireDatabase, public http: HttpClient, private authService: AuthProvider) { 
    // this.users = this.afDatabase.list('users');

    console.log(this.users);
  }

  ngOnInit() {
    this.authService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  // getDataFromDatabase() {
  //   this.afd.list('users/').valueChanges().subscribe(
  //     data => {
  //       console.log(data);
  //       this.users = data;
  //     }
  //   )
  // }
  // // Deletes a user from the database
  // onDeleteUser(id: string) {
  //   console.log("User deleted");

  //    this.ls.deleteUser(id).subscribe(() => {
  //      // Refreshes page automatically on delete
  //      this.ngOnInit();
  //   });
  // }
}
