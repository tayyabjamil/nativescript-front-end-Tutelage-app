import { Component, OnInit ,Input} from '@angular/core';
import { HttpService } from '~/app/shared/http.service';

@Component({
  selector: 'ns-profiledata',
  templateUrl: './profiledata.component.html',
  styleUrls: ['./profiledata.component.css']
})
export class ProfiledataComponent implements OnInit {
  course;

  constructor(private httpService:HttpService) { }
  @Input() userType;
  onSelectUserType;
  ngOnInit() {
    this.getUserCourses();
 
  }
  getUserCourses(){
    this.httpService.getUserCourses().subscribe(res=>{
      this.course=res;
console.log(res);
    },(error)=>{  
      console.log(error);
    }
    )
  }

 
}
