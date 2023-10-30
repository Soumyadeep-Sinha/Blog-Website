import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private main : MainService, private router:Router){}
  
  data:any = {}
  verified:boolean = false;
  id: number = 0;

  ngOnInit(): void {
      this.data = this.main.getUser();
      this.verified = this.main.getValidation();
      this.id = Math.floor(Math.random() * (3) + 1);
  }

  Logout(): void {
    this.main.clearUser();
    this.router.navigate(['login']);
  }
}
