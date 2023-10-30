import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  constructor(private main: MainService, private router: Router){}
  user: any = {}

  blogs : any = []
  ngOnInit(): void {
      if(!this.main.getValidation()){
        this.router.navigate(['login'])
      }else{
        this.user = this.main.getUser();
  
        this.main.getAllBlogs().subscribe((data) => {
          this.blogs = data;
        })
      }
  }
}
