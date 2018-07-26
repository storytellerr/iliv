import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceService } from './core-modules/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor(public auth: AuthServiceService) {
}
}
