import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';
import { User } from '../datatype';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private main: MainService, private router:Router){}
  data:any = {}
  notification:string = 'NO NEW MESSAGE';
  style:string = "success"
  size:number = 0;

  blogs : any = []

  ngOnInit(): void {
    if(!this.main.getValidation()){
      this.router.navigate(['login']);
    }
    this.data = this.main.getUser(); 

    this.main.getBlogByUserId(this.data.id).subscribe((data) => {
      this.blogs = data;
      this.size = this.blogs.length;
    })
    // console.log(this.data.id)
    // console.log(this.blogs)
  }


  Update(data: User){
    console.log(data);
    this.main.updateUser(data).subscribe((result) => {
      if(result){
        console.log(result);
        this.notification = "USER DETAILS UPDATED Login again to see the changes";
        this.style = "danger"
      }else{
        console.log("nothing")
      }
    })
  }

  deleteBlog(data:number){
    this.main.deleteBlog(data).subscribe(()=>{
      alert("post deleted");
      window.location.reload();
    })
  }
}
