import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public afAuth: AngularFireAuth,public router:Router,public afs:AngularFirestore) { 

  }
  logout(){
    this.afAuth.auth.signOut()
    console.log("logout")
    this.router.navigate([""]);
  }

  login(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(res =>{
      var name=res.additionalUserInfo.profile.email
      this.afs.firestore.doc('/users/'+name).get()
      .then(docSnapshot => {
        if (docSnapshot.exists) {
          console.log("exist")
          console.log(res.additionalUserInfo.profile.email)
          console.log('user info is ', res);
          this.router.navigate(["home"]);
        }
        else{
          console.log("not exist")
        }
      });
     
      
  }
  }

// isLoggedIn(): boolean {
//   return this.afAuth.authState !== null;
// }
}
