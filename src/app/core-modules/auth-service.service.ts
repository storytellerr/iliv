import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  constructor(public afAuth: AngularFireAuth,public router:Router,public afs:AngularFirestore) { 
  }

   login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((res: any) => {
      const name = res.additionalUserInfo.profile.email;
      this.afs.firestore.doc('/users/' + name).get().then((docSnapshot: any) => {
        if (docSnapshot.exists) {
          console.log('exist');
          console.log(res.additionalUserInfo.profile.email);
          console.log('user info is ', res);
          this.router.navigate( ['home'] );
        }});
      }).catch(error => console.log(error));
    }

      // login() {
      //   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      // .then((credential) =>  {
      // }).catch(error => console.log(error));
      // }

  logout(){
    this.afAuth.auth.signOut()
    console.log("logout")
    this.router.navigate(['']);
  }

}
