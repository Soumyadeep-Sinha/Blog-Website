import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  constructor(private main: MainService, private route: ActivatedRoute){}
  blog:any = {}
  id:number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.main.getBlogById(this.id).subscribe((result) => {
      this.blog = result;
    })
  }
}
