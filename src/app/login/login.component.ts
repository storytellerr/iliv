import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../core-modules/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthServiceService,public router:Router) {
    // if (auth.isLoggedIn()) {
    //   router.navigate(['home']);
    // }
  }

  ngOnInit() {
  }
  
    // return firebase.auth()
    //   .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //   .then((result: firebase.auth.UserCredential) => {
    //     // The signed-in user info.
    //     console.log(result)
    //     console.log("sucess")
        
    //   }).catch((error: FirebaseError) => {
    //     // Handle Errors here.
    //     console.log(error)
    //   }



}
