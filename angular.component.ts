import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.services';
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  // providers:[EnrollService]
})
export class AngularComponent {
  title = 'Angular';
  constructor(private enrollService:EnrollService){

  }
  onEnroll(){
   
      // const enrollService=new EnrollService()
      this.enrollService.OnEnrollClicked(this.title)

  }
}
