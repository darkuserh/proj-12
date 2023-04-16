import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.services';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
  // providers:[EnrollService]
})
export class JavascriptComponent {
  title = 'JavaScript';
  constructor(private enrollService:EnrollService){

  }
  onEnroll(){
    // const enrollService=new EnrollService()
  this.enrollService.OnEnrollClicked(this.title)
  }
}

