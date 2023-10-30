import { Component } from '@angular/core';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private main : MainService, private router:Router){}

  signUp(data:any):void{
    console.log(data); // for testing 
    this.main.registerUser(data).subscribe((result) => {
      console.log(result);
      console.log()
      if(result){
        alert("user registered");
        this.router.navigate(['login']);
      }

    })
  }
}
