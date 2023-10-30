import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginor-signin',
  templateUrl: './loginor-signin.component.html',
  styleUrls: ['./loginor-signin.component.css']
})
export class LoginorSigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  userObj:any={
     username:'',
     password:''
  }
  Login(){

     if((this.userObj.username=='admin') && (this.userObj.password=='12345')){
         this.router.navigateByUrl('Dashboard');
     }
     else{
       alert("Username and Password is not valid");
     }
  }

}
