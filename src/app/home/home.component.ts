import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthServiceService } from '../core-modules/auth-service.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  results = '';
  username;
  isadmin=false;
  listview=true;
  title;
  description;
  score;
  money;
  hospitalId;
  doctorId;
 
  

  constructor(private http: HttpClient,public auth: AuthServiceService,public router:Router,public afAuth: AngularFireAuth,private modalService: NgbModal,private readonly afs: AngularFirestore) { 
    this.afAuth.authState.subscribe(res => {
    if (res && res.uid) {
    console.log('user is logged in');
    this.username=res.email;
    let userDoc = this.afs.firestore.collection(`users`);
    userDoc.get().then((querySnapshot) => { 
    querySnapshot.forEach((doc) => {
        if(doc.id==this.username && doc.data().admin==true){
        console.log("this is admin"); 
        this.isadmin=true;
        }
   })
})
    } else {
     this.router.navigate([""]);
     }
    });
  }

  ngOnInit() {
  }
 
  getdata(value:String){
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var preuri='https://qa-api.medicalme.in/discovery/search?searchTerm='
    var posturi='&entityTypes=DOCTOR'
    var output = [preuri, value, posturi].join('');
    this.http.get(output).subscribe(data => {

      //var res = JSON.parse(data);
      this.results=data.result.sections[0].entities;
     // console.log(data.result.sections[0].entities);
    });
 }
 openVerticallyCentered(title,description,score,money,hospitalId,doctorId,content) {
   if(this.isadmin){

   
  this.title=title;
  this.description=description;
  this.score=score;
  this.money=money;
  this.hospitalId=hospitalId;
  this.doctorId=doctorId;
    this.modalService.open(content, { centered: true });
    this.loading=false;
   }
  }

 listToGrid(){
   if(this.listview==true){
    this.listview=false;
    console.log(this.listview)
   }
  else{
    this.listview=true;
    console.log(this.listview)
  }
  }
  
}


