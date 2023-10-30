import { Component, OnInit } from '@angular/core';
import { BlogPost, User } from '../datatype';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  contentArray: string[] = [];
  selectedContentType: string = 'text';
  contentToAdd: string = '';
  user: any = {};

  publisher: string = ''
  date: string = ''
  title: string = ''
  content: string = ''
  userId: number = 0;

  constructor(private main: MainService, private router: Router) { }

  ngOnInit(): void {
    if(!this.main.getValidation()){
      this.router.navigate(['login'])
    }else{
      this.user = this.main.getUser();
      this.publisher = this.user.name;
      this.date = new Date().toISOString();
      this.userId = this.user.id;
    }
  }

  updateTitle(title: string) {
    this.title = title;
  }

  addContent() {
    let contentTag = '';

    if (this.selectedContentType === 'image') {
      contentTag = `<img class="img-fluid" src="${this.contentToAdd}" alt="Image">`;
    } else if (this.selectedContentType === 'text') {
      contentTag = `<p>${this.contentToAdd}</p>`;
    } else if (this.selectedContentType === 'video') {
      contentTag = `<video src="${this.contentToAdd}" controls></video>`;
    }

    if (contentTag) {
      this.contentArray.push(contentTag);
      this.contentToAdd = '';
    }
  }


  saveContent(){
    for(let c of this.contentArray){
      this.content += c;
    }
  }

  deleteLastContent() {
    if (this.contentArray.length > 0) {
      this.contentArray.pop();
    }
  }

  savePost(){
    this.saveContent();
    this.contentArray = [];
    const blogPost: BlogPost = {
      title: this.title,
      content: this.content,
      publisher: this.publisher,
      userId : this.userId,
      date: this.date
    };

    this.main.createBlog(blogPost).subscribe((response) => {
      if(response){
        alert("blog created");
      }
    })

  }
}
