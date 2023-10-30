import { Component } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private main : MainService, private router:Router){}

  signUp(data:any):void{
    console.log(data); // for testing 
    this.main.loginUser(data).subscribe((result) => {
      console.log(result);
      console.log()
      if(result){
        alert("login success");
        this.router.navigate(['blogs']);
        this.main.setUser(result);
      }

    })
  }
}
