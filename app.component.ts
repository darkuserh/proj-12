import { Component } from '@angular/core';
import { EnrollService } from './Services/enroll.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers:[EnrollService]
})
export class AppComponent {
  constructor(private enrollService:EnrollService){

  }
  title = 'ServiceExample';
}
