import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment.prod';
import { AuthServiceService } from './core-modules/auth-service.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {  HttpClientJsonpModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DoctorInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule.forRoot(),
    HttpClientJsonpModule,
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
